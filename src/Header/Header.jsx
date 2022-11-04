import React from "react";

export default function Header() {
  return (
    <>
      <div className="max-w-full lg:min-h-[90vh] bg-[#0C1821] text-white flex flex-col lg:flex-row justify-center items-center px-5 py-16 lg:px-20 lg:gap-x-5">
        <div>
          <img src="/home-page-image.png" alt="" />
        </div>
        <div className="flex flex-col justify-start items-center space-y-8">
          <h1 className="text-5xl md:text-4xl lg:text-4xl">Discover The World Of Glasses</h1>
          <p className="text-md md:text-lg md:text-center lg:text-center lg:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum
            eius similique praesentium atque tempore incidunt ratione debitis
            itaque ullam!
          </p>
          <div className="flex justify-between items-center space-x-5">
            <button className="w-[160px] py-3 border-2 border-solid border-[#CCC9DC] lg:rounded-[50px]">
              Shop Collections
            </button>
            <button className="w-[160px] py-3 border-2 border-solid border-[#CCC9DC] lg:rounded-[50px]">
              Explore Collections
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
