import { useState } from "react";

export const Chat = () => {
  // useEffect(() => {
  //   // fetch(new URL('https://api.runpod.ai/v2/mpnlge4vkgddpo/runsync'),)

  //   return () => {
  //     second
  //   }
  // }, [third])
  const [loading, setLoading] = useState(false);

  const sendChat = async (input: string) => {
    console.log("Sencd Chat called");
    setLoading(true);
    const response = await fetch(
      new URL("https://api.runpod.ai/v2/mpnlge4vkgddpo/runsync"),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_RUNPODKEY,
        },
        body: JSON.stringify({
          input: {
            prompt: input,
            sampling_params: {
              max_tokens: 1000,
              n: 1,
              presence_penalty: 0.2,
              frequency_penalty: 0.7,
              temperature: 0.3,
            },
          },
        }),
      }
    );
    setLoading(false);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="w-screen h-screen bg-bgYellow">
      <img
        className="absolute bottom-10 left-10 h-12"
        src="src/assets/left_bottom_homepage.svg"
        alt="image"
      />
      <img
        className="absolute bottom-10 right-10 h-20"
        src="src/assets/right_bottom_homepage.svg"
        alt="image"
      />
      <div className="flex">
        <div className="flex-auto">
          <img
            src="src/assets/logo.svg"
            alt="logo"
            className="mt-4 ml-10 h-20"
          />
        </div>
        <div className="flex-auto h-16">
          <img
            src="src/assets/Avatar.svg"
            alt="logo"
            className="absolute right-10 top-4 h-16"
          />
        </div>
      </div>

      {/* the chat send box */}
      <div className="flex flex-col relative h-4/5 ">
        {loading && (
          <div className="flex justify-center items-center h-4/5">
            <p> Loading</p>
          </div>
        )}
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
                src="src/assets/Send_icon.svg"
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
