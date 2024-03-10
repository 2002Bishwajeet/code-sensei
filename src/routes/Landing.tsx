export const Landing =  () => {
  return(
    <div className="w-screen h-screen bg-bgYellow">
        <img
            className="h-screen w-screen absolute"
            src="src/assets/2.png"
            alt="image"
        />
        <img
            className="absolute h-24 w-60 bottom-6 left-2/4"
            src="src/assets/bottom2.svg"
            alt="image"
         />
         <img
            className="absolute h-24 w-56 top-32 left-2/4"
            src="src/assets/shine.svg"
            alt="image"
         />
         <img
            className="absolute w-96 h-96 object-fill top-56 right-28"
            src="src/assets/laptopImage.svg"
            alt="image"
         />
         <div className="absolute flex gap-4 items-center top-14 right-16">
            <div className="text-xl font-bold">About Us</div>
            <button
                type="button"
                className=" flex mb-2 w-32 h-10 py-1 text-2xl bg-purple border font-bold shadow-m">
                <img className="h-8 ml-1 mr-1" src="src/assets/github.svg"/>
                Github
            </button>
         </div>
            
         <div className="flex flex-col absolute gap-3 top-52 left-20">
            <div className="text-4xl font-bold tracking-widest">CONTEXT-ENHANCED</div>
            <div className="text-6xl font-bold tracking-wide text-purple2">CODE SEARCH ENGINE</div>
            <div className="tracking-widest font-bold text-2xl">
                The Code Sensei is an advanced code <br></br> 
                search engine designed to revolutionise <br></br>
                the way developers discover relevant <br></br>
                code snippets.
            </div>
         </div>
         <div className="absolute bottom-1/4 left-20">
            <button
                type="button"
                className="mb-2 w-80 h-14 mt-2 py-1 text-3xl bg-blue border font-bold shadow-m">
                Get started
            </button>
         </div>
         
    </div>
  )
    
}