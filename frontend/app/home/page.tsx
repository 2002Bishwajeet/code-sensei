import Header from "../../components/header";
import Footer from "../../components/footer";
import github from "../../public/VectorGithub.svg";
import Image from "next/image";
import "@radix-ui/themes/styles.css";
import {
  TextField,
  Button,
  Theme,
  TextFieldRoot,
  TextFieldInput,
} from "@radix-ui/themes";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="h-[400px] flex px-28 justify-center">
        <div className="flex flex-col justify-center text-center">
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
        <div className="flex-1"></div>
      </div>
      <div className="rounded-[50%] bg-skyblue [filter:blur(300px)] h-[100px]" />
      <Footer />
    </div>
  );
};

export default Home;
