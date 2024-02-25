export const Login = () => {
    return (
    <div className="flex place-items-center w-screen h-screen bg-bgYellow">
       <div className="flex w-1/2 justify-center place-items-center"> 
             <img src="src/assets/login.svg" className="w-4/5"></img>
        </div>

        <div className="flex w-1/2 flex-col items-center">
            <div className="flex justify-between w-2/4 mb-1">
                <p>New to Code Sensei?</p>
                <p className="text-purple font-bold">Create Account</p>
            </div>
            <InputField label="" type="text" placeholder="Email" value="" onChange={() => {}} />
            <InputField label="" type="text" placeholder="Password" value="" onChange={()=>{}}/>
        
            <button type="button" className="w-2/4 mb-2 mt-2 py-2 bg-purple border font-bold">Login</button>

            <div></div>
            <p>OR</p>
            <div></div>

            <button type="button" className="w-2/4 mb-2 mt-2 py-2 px-3 bg-green border font-bold">Login with OAuth</button>
        </div>  
          </div>
    )

}



const InputField = (props: {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
    <div className="w-2/4 mb-2">
      <label>{props.label}</label>
      <input
        className="border w-full py-2 px-3 text-gray-700 font-bold"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
    )
};