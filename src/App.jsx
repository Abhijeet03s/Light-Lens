import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Hero from "./Hero/Hero";
import Store from "./Store/Store";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Socials from "./Socials/Socials";
import Footer from "./Footer/Footer";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hamburgerMenu = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(isOpen);
      }
    };
    window.addEventListener("resize", hamburgerMenu);

    return () => {
      window.removeEventListener("resize", hamburgerMenu);
    };
  });

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <HamburgerMenu isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Store />
      <Socials />
      <Footer />
    </>
  );
}
