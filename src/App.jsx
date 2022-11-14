import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import Download from "./components/Download/Download";
import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

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

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <>
      <Navbar toggle={toggle} toggleCart={toggleCart} />
      <HamburgerMenu isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/cart" element={cartVisible && <Cart />} />
      </Routes>
      {!cartVisible && <Hero />}
      {!cartVisible && <Services />}
      {!cartVisible && <Products />}
      {!cartVisible && <Download />}
      {!cartVisible && <Socials />}
      <Footer />
    </>
  );
}
