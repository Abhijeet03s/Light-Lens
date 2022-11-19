import LogoNav from "../../assets/assets/LIGHTLENS-footer.svg"
import Twitter from "../../assets/assets/Twitter.svg"
import Github from "../../assets/assets/Github.svg"
import LinkedIn from "../../assets/assets/LinkedIn.svg"

export default function Footer() {
  return (
    <>
      <div className="max-w-full bg-[#4A99D3] text-white font-Inter lg:py-16 lg:px-20 py-10">
        <div className="w-full text-center lg:text-left lg:grid grid-cols-5 place-items-start p-10 space-y-10 lg:space-y-0 lg:space-x-44 lg:p-0 lg:space-x-18 lg:mb-20">
          <div className="w-full flex flex-col justify-center items-center lg:items-start font-light">
            <img
              className="w-48"
              src={LogoNav}
              alt="logo"
            />
            <h5 className="mt-10">
              400 Rajiv Nagar Drive Suite 200 New Delhi, FL 23342 India
            </h5>
            <p className="mt-5 text-sm">2022 LightLens. All rights reverved</p>
          </div>
          <div className="flex flex-col lg:items-start lg:w-[50%] space-y-5 font-light">
            <h1 className="text-xl font-bold lg:underline-animation">Link</h1>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="https://github.com/Abhijeet03s" target="_blank">
              Contact
            </a>
          </div>
          <div className="flex flex-col lg:items-start lg:w-[50%] space-y-5 font-light">
            <h1 className="text-xl font-bold lg:underline-animation">Help</h1>
            <a href="#">Payment Options</a>
            <a href="#">Returns</a>
            <a href="#">Privacy Policies</a>
          </div>
          <div className="flex flex-col lg:items-start lg:w-[50%] space-y-5 font-light">
            <h1 className="text-xl font-bold lg:underline-animation">
              Services
            </h1>
            <a href="#">Store Locator</a>
            <a href="#">Enter My Power</a>
            <a href="#">Buying Guide</a>
            <a href="#">Frame Size</a>
          </div>
          <div className="flex flex-col justify-center items-center space-y-5">
            <h1 className="text-xl font-bold lg:underline-animation">
              Socials
            </h1>
            <div className="flex justify-center items-center space-x-5">
              <a href="#">
                <img src={Github} alt="github-img" />
              </a>
              <a href="#">
                <img src={LinkedIn} alt="linkedin-img" />
              </a>
              <a href="#">
                <img src={Twitter} alt="twitter-img" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-[80%] lg:w-[100%] mx-auto border-t-2 border-t-solid  border-white"></div>
        <h1 className="text-center text-xl font-medium mt-5">
          Designed and Built by Abhijeet Sharma
        </h1>
      </div>
    </>
  );
}
