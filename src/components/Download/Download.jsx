export default function Download() {
  return (
    <>
      <div className="max-w-full lg:min-h-screen bg-Download text-black flex flex-col lg:flex-row justify-center items-center font-Inter px-5 py-16 lg:px-20 lg:gap-x-5 relative z-0">
        <div className="hidden lg:block -z-10 lg:absolute bottom-40 left-16">
          <img
            className="h-24"
            src="/assets/dots-design.svg"
            alt="square-design"
          />
        </div>
        <div>
          <img src="/assets/mobile-mockup.svg" alt="mobile-mockup" />
        </div>
        <div className="flex flex-col justify-center items-center text-center space-y-10">
          <h1 className="text-4xl lg:text-3xl xl:text-4xl font-Mukta font-bolder">
            Download app to enjoy more!
          </h1>
          <p className="text-md md:text-lg md:text-center lg:text-center lg:w-[80%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium hic voluptatum officiis non ipsum impedit.
          </p>
          <div className="flex justify-between items-center space-x-5 text-white">
            <button className="w-[170px] flex justify-between items-center px-4 py-2 rounded-xl bg-[#4A99D3]">
              <div>
                <img src="/assets/google-play-icon.svg" alt="" />
              </div>
              <div className="flex flex-col items-start">
                <h6 className="text-[12px]">GET IT ON</h6>
                <h1 className="text-lg">Google Play</h1>
              </div>
            </button>
            <button className="w-[170px] flex justify-between items-center px-4 py-2 rounded-xl bg-[#4A99D3]">
              <div>
                <img src="/assets/apple-store-icon.svg" alt="" />
              </div>
              <div className="flex flex-col items-start">
                <h6 className="text-[12px]">GET IT ON</h6>
                <h1 className="text-lg">Apple Store</h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
