import { Divider } from "../components/Divider";

export const Login = () => {
  return (
    <div className="w-screen h-screen bg-bgYellow">
      <img
        className="h-28 absolute top-8 left-16"
        src="src/assets/illustration_topleft_login.svg"
        alt="image"
      />
      <img
        className="h-40 absolute object-right-top right-0"
        src="src/assets/Illustration_topright_login.svg"
        alt="image"
      />
      <img
        className="h-40 absolute bottom-0 right-0"
        src="src/assets/Illustration_rightcorner_login.svg"
        alt="image"
      />
      <img
        className="h-16 absolute bottom-4 left-1/3"
        src="src/assets/Illustration_bottom_login.svg"
        alt="image"
      />
      <div className="flex place-items-center h-screen w-screen">
        <div className="flex w-1/2 justify-center place-items-center">
          <img src="src/assets/login.svg" className="w-2/3"></img>
        </div>
        <div className="flex w-1/2 flex-col items-center">
          <div className="flex justify-between w-2/4 mb-1">
            <p>New to Code Sensei?</p>
            <p className="text-purple font-bold">Create Account</p>
          </div>
          <InputField
            label=""
            type="text"
            placeholder="Email"
            onChange={() => {}}
            imageSrc="src/assets/mailIcon.svg"
          />
          <InputField
            label=""
            type="text"
            placeholder="Password"
            onChange={() => {}}
            imageSrc="src/assets/lockIcon.svg"
          />

          <button
            type="button"
            className="w-2/4 mb-2 mt-2 py-2 bg-purple border font-bold shadow-m"
          >
            Login
          </button>

          <div className="flex place-items-center">
            <Divider />
            <p className="font-bold px-4">OR</p>
            <Divider />
          </div>
          <button
            type="button"
            className="w-2/4 mb-2 mt-2 py-2 px-3 bg-green border font-bold shadow-m"
          >
            Login with OAuth
          </button>
        </div>
      </div>
    </div>
  );
};

const InputField = (props: {
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  imageSrc: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-row border w-2/4 mb-2 py-2 px-3 text-gray-700 font-bold bg-white shadow-m">
      <img src={props.imageSrc} className="mr-2 w-6 h-7" alt={props.label} />
      <input
        className="w-5/6 outline-none"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
