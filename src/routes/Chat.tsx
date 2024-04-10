export const Chat = () => {
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

