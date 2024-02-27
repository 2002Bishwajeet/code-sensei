export const Login = () => {
  return (
    <div className="flex place-items-center w-screen h-screen bg-bgYellow">
      <div className="flex w-1/2 justify-center place-items-center">
        <img src="src/assets/login.svg" className="w-2/3"></img>
      </div>
        <div className="flex w-1/2 flex-col items-center">
            <div className="flex justify-between w-2/4 mb-1">
                <p>New to Code Sensei?</p>
                <p className="text-purple font-bold">Create Account</p>
            </div>
            <InputField label="" type="text" placeholder="Email" onChange={() => {}} imageSrc="src/assets/mailIcon.svg"/>
            <InputField label="" type="text" placeholder="Password" onChange={()=>{}} imageSrc="src/assets/lockIcon.svg"/>
        
            <button type="button" className="w-2/4 mb-2 mt-2 py-2 bg-purple border font-bold shadow-m">Login</button>

            <div className="flex">
              <div></div>
              <p className="font-bold">OR</p>
              <div></div>
            </div>
            <button type="button" className="w-2/4 mb-2 mt-2 py-2 px-3 bg-green border font-bold shadow-m">Login with OAuth</button>
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
      <img src={props.imageSrc} className="mr-2 w-6 h-7" alt={props.label}/>
      <input
        className="w-5/6"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
