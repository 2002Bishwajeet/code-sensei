"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import github from "../../public/VectorGithub.svg";
import Image from "next/image";
import "@radix-ui/themes/styles.css";
import { useState } from "react";
import {
  TextField,
  Button,
  Theme,
  TextFieldRoot,
  TextFieldInput,
} from "@radix-ui/themes";

const Home = () => {
  const [messageText, setMessageText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("MESSAGE TEXT:  ", messageText);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div>
          <Header />
        </div>
        <div className="flex justify-center items-center h-96 px-32">
          <div className="flex flex-initial flex-col justify-center text-center pl-16 pr-32">
            <div className="mx-auto">
              <Image src={github} alt="Gihtub Image" width={80} height={80} />
            </div>
            <p className="text-white text-2xl font-semibold py-6">
              <span>Add link to your repository</span>
            </p>

            <div>
              <input type="search" name="Github" id="repoSearch" />
              <div className="py-4">
                <Theme>
                  <Button color="blue" size="2" className="py-4">
                    <a href="">Analyse</a>
                  </Button>
                </Theme>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col bg-gray-800 border-2 rounded-xl border-slate-500 h-96 p-6">
            <div className="flex-1">Hello</div>
            <footer className="">
              <form onSubmit={handleSubmit}>
                <fieldset className="flex gap-4">
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Send a message..."
                    className="w-full resize-none rounded-md bg-gray-700 text-white focus:bg-gray-600 focus:border-white focus:outline focus:outline-white py-2 px-3 text-sm h-9"
                  />
                  <button
                    type="submit"
                    className="rounded-md text-white bg-sky-700 px-4 h-9 hover:bg-sky-600"
                  >
                    Go
                  </button>
                </fieldset>
              </form>
            </footer>
          </div>
        </div>
        <div className="flex-none rounded-[50%] bg-skyblue [filter:blur(300px)] h-[100px]" />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
