import React from "react";
import logoFooter from "../../assets/images/lightlens-footer.svg";
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary font-Inter">
        <div className="container px-14 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              className="h-6 w-auto"
              src={logoFooter}
              alt="LightLens"
              loading="lazy"
            />
          </Link>
          <p className="text-sm text-white font-light sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            &copy; {new Date().getFullYear()} LightLens. All rights reserved.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://github.com/Abhijeet03s"
              target="_blank"
              rel="noreferrer"
              className="text-white"
              aria-label="Visit my GitHub profile"
            >
              <AiOutlineGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhijeet-sharma03/"
              target="_blank"
              rel="noreferrer"
              className="ml-3 text-white"
              aria-label="Connect with me on LinkedIn"
            >
              <AiOutlineLinkedin size={22} />
            </a>
            <a
              href="https://x.com/iabhi43"
              target="_blank"
              rel="noreferrer"
              className="ml-3 text-white"
              aria-label="Follow me on X"
            >
              <AiOutlineTwitter size={22} />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}