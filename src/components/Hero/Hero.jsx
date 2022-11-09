export default function Hero() {
  return (
    <>
      <div className="max-w-full lg:min-h-[90vh] bg-color text-black flex flex-col lg:flex-row justify-center items-center font-Inter px-5 py-16 lg:px-20 lg:gap-x-5 relative">
        {/* <div className="z-10 absolute top-20">
          <img src="/assets/sqaure-design.svg" alt="" />
        </div> */}
        <div className="w-[100%] md:w-[50%] lg:w-[70%]">
          <img
            className="object-cover"
            src="/specs-1.svg"
            alt="homepage-spec-img"
          />
        </div>
        <div className="flex flex-col justify-start items-center space-y-8">
          <h1 className="text-5xl md:text-5xl lg:text-4xl xl:text-[52px] font-Mukta font-bolder">
            Discover The World Of Glasses
          </h1>
          <p className="text-md md:text-lg md:text-center lg:text-center lg:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum
            eius similique praesentium atque tempore incidunt ratione debitis
            itaque ullam!
          </p>
          <div className="flex justify-between items-center space-x-5">
            <button className="w-[160px] py-3 bg-[#4A99D3] shadow-lg hover:text-[#4A99D3] hover:bg-white transition duration-500 text-white lg:rounded-[50px]">
              Buy Now
            </button>
            <button className="w-[160px] py-3 bg-[#4A99D3] shadow-lg hover:text-[#4A99D3] hover:bg-white transition duration-500 text-white lg:rounded-[50px]">
              Explore Shop
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
