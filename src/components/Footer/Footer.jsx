import LogoNav from "../../assets/assets/LIGHTLENS-footer.svg";
import Twitter from "../../assets/assets/Twitter.svg";
import Github from "../../assets/assets/Github.svg";
import LinkedIn from "../../assets/assets/LinkedIn.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#4A99D3]">
        <div className="container px-8 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={LogoNav} alt="footer-logo" />
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Copyright © 2022 - All right reserved
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://github.com/Abhijeet03s"
              target="_blank"
              className=" text-white"
            >
              <img src={Github} alt="github-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhijeet-sharma03/"
              className="ml-3 text-white"
            >
              <img src={LinkedIn} alt="linkedin-icon" />
            </a>
            <a
              href="https://twitter.com/abhijeet_s04"
              className="ml-3 text-white"
            >
              <img src={Twitter} alt="twitter-icon" />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
