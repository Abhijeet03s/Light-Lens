import React from "react";

export default function Socials() {
  return (
    <>
      <div className="max-w-full h-[300px] lg:h-[400px] bg-[#0C1821] text-white font-Inter flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-y-10">
          <h1 className="text-5xl lg:text-6xl font-Mukta">Our Instagram</h1>
          <p className="text-md lg:text-xl">Follow our store on Instagram</p>
        </div>
        <div className="bg-white px-7 py-2 lg:px-10 lg:py-3 border-2 border-solid border-[#CCC9DC] lg:rounded-[50px]">
          <button className="text-[#0C1821] font-bold">Follow Us</button>
        </div>
      </div>
    </>
  );
}
