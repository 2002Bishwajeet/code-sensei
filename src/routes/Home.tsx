export const Home = () => {
  return (
    <div className="w-screen h-screen bg-bgYellow">
      <img
        className="absolute h-screen right-0"
        src="src/assets/Background_homepagepng.png"
        alt="image"
      />
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
        <img src="src/assets/logo.svg" alt="logo" className="left-10" />
        <img src="src/assets/Avatar.svg" alt="logo" className="right-4" />
      </div>
      <div className="flex justify-center">
        <InputField
          label=""
          type="text"
          placeholder="Enter Github Repository URL"
          onChange={() => {}}
        />
        <button
          type="button"
          className="mx-2 px-3 py-2 bg-green border font-bold shadow-m"
        >
          New chat
        </button>
      </div>
    </div>
  );
};

const InputField = (props: {
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="border w-2/4 mb-2 px-3 text-gray-700 font-bold bg-white shadow-m">
      <input
        className="w-5/6 py-2 outline-none"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
