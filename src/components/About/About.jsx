import React from "react";
import AboutImg from "../../assets/assets/about.svg"

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-10 p-10">
        <h1 className="text-5xl font-Poppins">About</h1>
        <p className="text-lg text-center text-black lg:text-xl">
          Using the TMDB API, I used Reactjs to create the Movie List App, which
          fetches movies from the server.
        </p>
        <img
          className="h-[400px]"
          src={AboutImg}
          alt="about-pic"
        />
      </div>
    </>
  );
}
