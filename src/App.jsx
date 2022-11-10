import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Store from "./components/Store/Store";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Download from "./components/Download/Download";
import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";
import data from "./data.json";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState(data);

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
      <Services />
      <Store products={products} setProducts={setProducts} />
      <Download />
      <Socials />
      <Footer />
    </>
  );
}
