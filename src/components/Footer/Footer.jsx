import LogoNav from "../../assets/assets/LIGHTLENS-footer.svg";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";


export default function Footer() {
  return (
    <>
      <footer className="bg-[#4A99D3] font-Inter">
        <div className="container px-8 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={LogoNav} alt="footer-logo" />
          </a>
          <p className="text-sm text-white font-medium sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Copyright © 2022 - All right reserved
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://github.com/Abhijeet03s"
              target="_blank"
              className=" text-white"
            >
              <AiOutlineGithub size={22} />             
            </a>
            <a
              href="https://www.linkedin.com/in/abhijeet-sharma03/"
              target="_blank"
              className="ml-3 text-white"
            >
              <FaLinkedin size={22} />              
            </a>
            <a
              href="https://twitter.com/abhijeet_s04"
              target="_blank"
              className="ml-3 text-white"
            >
              <AiOutlineTwitter size={22} />             
            </a>
          </span>
        </div>
      </footer>     
    </>
  );
}
