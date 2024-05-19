import classNames from "classnames";
import { useState } from "react";
import { useParams } from "react-router-dom";
import markdownit from "markdown-it";
import hljs from "highlight.js"; // https://highlightjs.org

const md = markdownit({
  breaks: true,
  html: false,
  linkify: true,
  typographer: true,
  highlight: function (str, lang): string {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre><code class="hljs">' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          "</code></pre>"
        );
      } catch (__) {
        console.error(__);
      }
    }

    return (
      '<pre><code class="hljs">' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
});

interface IMessage {
  user: User;
  content: string;
}

type User = "user" | "bot";

export const Chat = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { repo } = useParams();
  const sendChat = async (input: string) => {
    setMessages([...messages, { user: "user", content: input }]);
    console.log("Send Chat called");
    setLoading(true);
    const response = await fetch(new URL(`http://127.0.0.1:8000/${repo}`), {
      method: "POST",
      body: input,
    }).catch((e) => {
      console.error(e);
      throw e;
    });
    setLoading(false);
    const data = await response.json();
    setMessages((old) => [...old, { user: "bot", content: data.answer }]);
    console.log(data);
  };

  const renderMessages = () => {
    return messages.map((message) => (
      <ChatMessageBubble key={message.content} message={message} />
    ));
  };

  return (
    <div className="w-screen h-screen bg-bgYellow">
      <img
        className="absolute bottom-10 left-10 h-12"
        src="/assets/left_bottom_homepage.svg"
        alt="image"
      />
      <img
        className="absolute bottom-10 right-10 h-20"
        src="/assets/right_bottom_homepage.svg"
        alt="image"
      />
      <div className="flex">
        <div className="flex-auto">
          <img src="/assets/logo.svg" alt="logo" className="mt-4 ml-10 h-20" />
        </div>
        <div className="flex-auto h-16">
          <img
            src="/assets/Avatar.svg"
            alt="logo"
            className="absolute right-10 top-4 h-16"
          />
        </div>
      </div>

      {/* the chat send box */}
      <div className="flex flex-col relative h-4/5">
        <div className="flex flex-col h-[90%] w-1/2 place-self-center overflow-y-auto no-scrollbar">
          {renderMessages()}
          {loading && (
            <div className="flex justify-start">
              <img
                src="/assets/Bot_avvatar.svg"
                alt="Avatar"
                className="h-12"
              />
              <div className="bg-blue p-2 m-2 border shadow-m max-w-96">
                <p>...</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center absolute inset-x-0 bottom-0">
          <form className="flex items-center w-1/2 border px-3 py-2 text-gray-700 font-bold bg-white shadow-m">
            <input
              type="text"
              id="text"
              placeholder="Type a message"
              className="w-full outline-none font-bold text-xl"
            />
            <button
              type="submit"
              className="pl-3 bg-green border font-bold shadow-m"
              onClick={(e) => {
                if (loading) return;
                e.preventDefault();
                const input = (
                  document.getElementById("text") as HTMLInputElement
                ).value;
                if (input === "") return;
                sendChat(input);
                (document.getElementById("text") as HTMLInputElement).value =
                  "";
              }}
            >
              <img
                src="/assets/Send_icon.svg"
                alt="Send"
                className="w-2/3 py-1"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ChatMessageBubble = ({ message }: { message: IMessage }) => {
  const { user, content } = message;
  const isMe = user === "user";
  const renderedContent = md.render(content);

  const avatarStyle = classNames("m-2 p-2 border shadow-m", {
    "bg-white": isMe,
    "bg-blue": !isMe,
  });

  const bubblePositionStyle = classNames("flex items-center", {
    "justify-start": !isMe,
    "flex-row-reverse place-self-end": isMe,
  });

  return (
    <div className="flex flex-col">
      <div className={bubblePositionStyle}>
        <img
          src={isMe ? "/assets/User_avatar.svg" : "/assets/Bot_avvatar.svg"}
          alt="Avatar"
          className="h-12"
        />
        <div
          className={`${avatarStyle} max-w-full md:max-w-lg break-words whitespace-pre-wrap overflow-auto p-2`}
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        ></div>
      </div>
    </div>
  );
};
