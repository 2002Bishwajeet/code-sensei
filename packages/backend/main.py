import os
from langchain_chroma import Chroma

from rich import console, progress
from fastapi import Body, FastAPI, HTTPException
from git import RemoteProgress, Repo
from langchain_community.document_loaders import DirectoryLoader
from langchain_community.embeddings import HuggingFaceInferenceAPIEmbeddings
from typing import Any, Dict, Iterator, List, Optional
from langchain_core.callbacks.manager import CallbackManagerForLLMRun
from langchain_core.language_models.llms import LLM
from langchain_core.outputs import GenerationChunk
from langchain import hub
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
import requests
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

inference_api_key = "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"
embeddings = HuggingFaceInferenceAPIEmbeddings(
    api_key=inference_api_key, model_name="sentence-transformers/all-MiniLM-L6-v2"
)

3


class GitRemoteProgress(RemoteProgress):
    OP_CODES = [
        "BEGIN",
        "CHECKING_OUT",
        "COMPRESSING",
        "COUNTING",
        "END",
        "FINDING_SOURCES",
        "RECEIVING",
        "RESOLVING",
        "WRITING",
    ]
    OP_CODE_MAP = {
        getattr(RemoteProgress, _op_code): _op_code for _op_code in OP_CODES
    }

    def __init__(self) -> None:
        super().__init__()
        self.progressbar = progress.Progress(
            progress.SpinnerColumn(),
            # *progress.Progress.get_default_columns(),
            progress.TextColumn("[progress.description]{task.description}"),
            progress.BarColumn(),
            progress.TextColumn(
                "[progress.percentage]{task.percentage:>3.0f}%"),
            "eta",
            progress.TimeRemainingColumn(),
            progress.TextColumn("{task.fields[message]}"),
            console=console.Console(),
            transient=False,
        )
        self.progressbar.start()
        self.active_task = None

    def __del__(self) -> None:
        # logger.info("Destroying bar...")
        self.progressbar.stop()

    @classmethod
    def get_curr_op(cls, op_code: int) -> str:
        """Get OP name from OP code."""
        # Remove BEGIN- and END-flag and get op name
        op_code_masked = op_code & cls.OP_MASK
        return cls.OP_CODE_MAP.get(op_code_masked, "?").title()

    def update(
        self,
        op_code: int,
        cur_count: str | float,
        max_count: str | float | None = None,
        message: str | None = "",
    ) -> None:
        # Start new bar on each BEGIN-flag
        if op_code & self.BEGIN:
            self.curr_op = self.get_curr_op(op_code)
            # logger.info("Next: %s", self.curr_op)
            self.active_task = self.progressbar.add_task(
                description=self.curr_op,
                total=max_count,
                message=message,
            )

        self.progressbar.update(
            task_id=self.active_task,
            completed=cur_count,
            message=message,
        )

        # End progress monitoring on each END-flag
        if op_code & self.END:
            # logger.info("Done: %s", self.curr_op)
            self.progressbar.update(
                task_id=self.active_task,
                message=f"[bright_black]{message}",
            )


# Create a dictionary to store in memory documents
# the key is the guid and the value is the list of documents
# add type as well
documents = {}


class CodeSenseiLLM(LLM):
    """A custom chat model that echoes the first `n` characters of the input.

    When contributing an implementation to LangChain, carefully document
    the model including the initialization parameters, include
    an example of how to initialize the model and include any relevant
    links to the underlying models documentation or API.

    Example:

        .. code-block:: python

            model = CustomChatModel(n=2)
            result = model.invoke([HumanMessage(content="hello")])
            result = model.batch([[HumanMessage(content="hello")],
                                 [HumanMessage(content="world")]])
    """

    n: int
    """The number of characters from the last message of the prompt to be echoed."""

    def _call(
        self,
        prompt: str,
        stop: Optional[List[str]] = None,
        run_manager: Optional[CallbackManagerForLLMRun] = None,
        **kwargs: Any,
    ) -> str:
        """Run the LLM on the given input.

        Override this method to implement the LLM logic.

        Args:
            prompt: The prompt to generate from.
            stop: Stop words to use when generating. Model output is cut off at the
                first occurrence of any of the stop substrings.
                If stop tokens are not supported consider raising NotImplementedError.
            run_manager: Callback manager for the run.
            **kwargs: Arbitrary additional keyword arguments. These are usually passed
                to the model provider API call.

        Returns:
            The model output as a string. Actual completions SHOULD NOT include the prompt.
        """
        if stop is not None:
            raise ValueError("stop kwargs are not permitted.")
        url = "https://api.runpod.ai/v2/mpnlge4vkgddpo/runsync"
        headers = {
            "accept": "application/json",
            "content-type": "application/json",
            "Authorization": "4U3JJ24W9T5KQB2M67FWYURZ46WG11X281415CCY",
        }
        payload = {
            "input": {"prompt": prompt,
                      "sampling_params": {
                          "max_tokens": 1000,
                          "n": 1,
                          "presence_penalty": 1.2,
                          "frequency_penalty": 0.7,
                          "temperature": 0.6,
                          "top_p": 0.9,
                          "stop": ["USER:"],
                          "ignore_eos": False,
                      }
                      }
        }
        response = requests.post(url, headers=headers, json=payload)

        print(response.json())
        return response.json()["output"]["text"][0]

    def _stream(
        self,
        prompt: str,
        stop: Optional[List[str]] = None,
        run_manager: Optional[CallbackManagerForLLMRun] = None,
        **kwargs: Any,
    ) -> Iterator[GenerationChunk]:
        """Stream the LLM on the given prompt.

        This method should be overridden by subclasses that support streaming.

        If not implemented, the default behavior of calls to stream will be to
        fallback to the non-streaming version of the model and return
        the output as a single chunk.

        Args:
            prompt: The prompt to generate from.
            stop: Stop words to use when generating. Model output is cut off at the
                first occurrence of any of these substrings.
            run_manager: Callback manager for the run.
            **kwargs: Arbitrary additional keyword arguments. These are usually passed
                to the model provider API call.

        Returns:
            An iterator of GenerationChunks.
        """
        for char in prompt[: self.n]:
            chunk = GenerationChunk(text=char)
            if run_manager:
                run_manager.on_llm_new_token(chunk.text, chunk=chunk)

            yield chunk

    @property
    def _identifying_params(self) -> Dict[str, Any]:
        """Return a dictionary of identifying parameters."""
        return {
            # The model name allows users to specify custom token counting
            # rules in LLM monitoring applications (e.g., in LangSmith users
            # can provide per token pricing for their model and monitor
            # costs for the given LLM.)
            "model_name": "LlamaChatModel",
        }

    @property
    def _llm_type(self) -> str:
        """Get the type of language model used by this chat model. Used for logging purposes only."""
        return "Llama2"


llm = CodeSenseiLLM(n=2)


@app.get('/helloworld')
def hello_world():
    return "Hello World"


@app.post("/")
def getGithubUrl(url: str = Body(...)):
    if url:
        # Clone the repo
        repo_path = cloneRepo(url)
        # Load the document
        loader = DirectoryLoader(
            repo_path, show_progress=True, use_multithreading=False, silent_errors=True, recursive=True, max_concurrency=8)
        repo_name = repo_path.split("/")[-1]
        documents[repo_name] = loader.load()

    return {"url": repo_name}


@app.post("/{repo_name}")
def answerQuestion(repo_name: str, question: str = Body(...)):
    print(question)
    if repo_name not in documents:
        raise HTTPException(status_code=404, detail="Repo not found")
    loaded_documents = documents[repo_name]
    vector_store = Chroma.from_documents(
        loaded_documents, embedding=embeddings)
    retriever = vector_store.as_retriever()
    prompt = hub.pull("rlm/rag-prompt")
    rag_chain = (
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )
    response = rag_chain.invoke(question)
    return {"answer": response}


def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)


def cloneRepo(url: str):
    repo_name = url.split("/")[-1].replace(".git", "")
    if (not url.endswith(".git")):
        url = url + ".git"
    repo_path = f"tmp/{repo_name}"
    if (os.path.exists(repo_path)):
        # NO NEED TO CLONE
        return repo_path
    cloned_repo = Repo.clone_from(url, repo_path, progress=GitRemoteProgress())
    # change all the extensions to txt from the array extensions that we support
    for root, dirs, files in os.walk(repo_path):
        for file in files:
            if file.split(".")[-1] in extensions:
                file_path = os.path.join(root, file)
                new_file_path = changeFileExtension(
                    file_path, file.split(".")[-1])
                os.rename(file_path, new_file_path)
    # # remove all the folders that are not needed
    # for root, dirs, files in os.walk(repo_path):
    #     for dir in dirs:
    #         if dir not in folders:
    #             dir_path = os.path.join(root, dir)
    #             shutil.rmtree(dir_path)
    return repo_path


def changeFileExtension(file_path: str, extension: str):
    return file_path.replace(f".{extension}", ".txt")


# List of code extensions that we support
extensions = ["tsx", "ts", "js", "java", "py", "c", "cpp", "go", "rb", "md", "rs", "kt", "swift", "php", "html", "css", "scss", "sass", "less", "dart", "json", "xml", "yaml", "yml", "sql", "sh", "bash", "ps1",
              "psm1", "psd1", "bat", "cmd", "vbs", "vba", "vb", "cs", "fs", "fsx", "fsi", "lua", "pl", "r", "perl", "scala", "groovy", "gradle", "dockerfile", "properties", "ini", "cfg", "conf", "rst", "adoc", "log", "csv"]

folders = ["lib", "src", ]
