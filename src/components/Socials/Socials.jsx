import React from "react";

export default function Socials() {
  return (
    <>
      <div className="max-w-full h-[300px] lg:h-[400px] text-black font-Inter flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-y-10">
          <h1 className="text-5xl lg:text-6xl font-Mukta">Our Instagram</h1>
          <p className="text-md lg:text-xl">Follow our store on Instagram</p>
        </div>
        <div className="px-7 py-2 bg-[#4A99D3] shadow-lg text-white  hover:text-black hover:bg-white transition duration-500 lg:px-10 lg:py-3 lg:rounded-[50px]">
          <button className="font-bold  ">Follow Us</button>
        </div>
      </div>
    </>
  );
}
