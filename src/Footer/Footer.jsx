
export default function Footer() {
  return (
    <>
      <div className="max-w-full bg-[#f4f4f4] text-black font-Inter lg:px-20 lg:my-20">
        <div className="w-full text-center lg:text-left lg:grid grid-cols-5 place-items-start p-10 space-y-10 lg:p-0 lg:gap-x-36 lg:mb-20">
          <div className="w-full flex flex-col justify-center items-center lg:items-start">
            <img className="w-48" src="/assets/LIGHTLENS.svg" alt="logo" />
            <h5 className="mt-10">
              400 Rajiv Nagar Drive Suite 200 New Delhi, FL 23342 India
            </h5>
            <p className="mt-5 text-sm">2022 LightLens. All rights reverved</p>
          </div>
          <div className="flex flex-col lg:items-start space-y-5 ">
            <h1 className="text-xl font-bold">Link</h1>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
          </div>
          <div className="flex flex-col justify-center space-y-5 ">
            <h1 className="text-xl font-bold">Help</h1>
            <a href="#">Payment Options</a>
            <a href="#">Returns</a>
            <a href="#">Privacy Policies</a>
          </div>
          <div className="flex flex-col justify-center space-y-5 ">
            <h1 className="text-xl font-bold">Services</h1>
            <a href="#">Store Locator</a>
            <a href="#">Enter My Power</a>
            <a href="#">Buying Guide</a>
            <a href="#">Frame Size</a>
          </div>
          <div className="flex flex-col justify-center items-center space-y-5 ">
            <h1 className="text-xl font-bold">Socials</h1>
            <div className="flex justify-center items-center space-x-5">
              <a href="#">
                <img src="/assets/Github.svg" alt="" />
              </a>
              <a href="#">
                <img src="/assets/LinkedIn.svg" alt="" />
              </a>
              <a href="#">
                <img src="/assets/Twitter.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-t-solid border-black"></div>
        <h1 className="text-center text-xl font-bold mt-5">
          Designed and Built by Abhijeet Sharma
        </h1>
      </div>
    </>
  );
}
