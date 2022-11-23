import React from "react";
import AboutImg from "../../assets/assets/about.svg";

export default function About() {
  return (
    <>
      <div className="max-w-full flex flex-col items-center justify-center space-y-10 p-10">
        <h1 className="text-5xl font-Poppins">About</h1>
        <p className="w-[70%] text-lg text-center text-black lg:text-xl">
          An e-commerce website for <b>spectacles</b> built using{" "}
          <b>React.js</b> I created my own database for this project. All the
          CRUD operations can be applied to the website.
        </p>
        <img className="h-[400px]" src={AboutImg} alt="about-pic" />
      </div>
    </>
  );
}
