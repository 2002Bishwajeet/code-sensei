import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import "@radix-ui/themes/styles.css";
import { Button, Theme } from "@radix-ui/themes";
import Illustration from "../public/Hand coding-amico.svg";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-full">
        <Header />
        <div className="flex justify-center items-center">
          <div className="pr-28 py-4">
            <p className=" text-white text-4xl font-semibold">
              <span>CONTEXT-ENHANCED</span>
            </p>
            <p className="text-5xl drop-shadow-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-midBlue to-skyblue">
              <span>CODE SEARCH ENGINE</span>
            </p>
            <p className="text-[#cdcdcd] text-2xl pt-8 pb-24">
              <span>
                The Code Sensei is an advanced code search engine <br />{" "}
                designed to revolutionize the way developers discover <br />
                relevant code snippets.
              </span>
            </p>
            <Theme>
              <Button color="blue" size="4">
                <a href="/home">Get Started</a>
              </Button>
            </Theme>
          </div>
          <div className="pl-28">
            <Image
              src={Illustration}
              alt="Illustration"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="rounded-[50%] bg-skyblue [filter:blur(300px)] h-[100px]" />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

// <div className="relative bg-gray w-full h-[1117px] overflow-hidden text-left text-[60px] text-white font-sf-pro">
//   <div className="absolute top-[304px] left-[159px] inline-block w-[813px] h-[401px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
//     <p className="m-0 font-semibold">{`CONTEXT-ENHANCED `}</p>
//     <p className="m-0 text-[70px]">
//       <b className="[background:linear-gradient(89.83deg,_#0089ed,_#00eaf9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
//         <span>CODE SEARCH ENGINE</span>
//       </b>
//     </p>
//     <p className="m-0 text-21xl">
//       <span>
//         <b className="[background:linear-gradient(89.83deg,_#0089ed,_#00eaf9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
//           &nbsp;
//         </b>
//       </span>
//     </p>
//     <p className="m-0 text-whitesmoke">
//       <span>
//         <span>
//           The Code Sensei is an advanced code search engine designed to
//           revolutionize the way developers discover relevant code snippets.
//         </span>
//       </span>
//     </p>
//   </div>
//   <img
//     className="absolute top-[220px] left-[1037px] w-[587px] h-[587px] overflow-hidden object-cover"
//     alt=""
//     src="/undefined.png"
//   />
//   <div className="absolute top-[764px] left-[calc(50%_-_705px)] w-[280px] h-[82.51px] text-center text-[32.14px]">
//     <div className="absolute top-[0px] left-[calc(50%_-_140px)] rounded-[20px] bg-dodgerblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[280px] h-[82.51px]" />
//     <div className="absolute top-[calc(50%_-_19.05px)] left-[calc(50%_-_88.83px)] font-medium inline-block w-[177.66px] h-[38.01px]">
//       Get started
//     </div>
//   </div>
//   <img
//     className="absolute top-[58px] left-[137px] w-[424px] h-[167px] object-cover"
//     alt=""
//     src="/undefined1.png"
//   />
//   <div className="absolute top-[967px] left-[608px] rounded-[50%] bg-aqua [filter:blur(1000px)] w-[512px] h-[495px]" />
// </div>
