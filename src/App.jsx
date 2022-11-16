import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
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
        <Route path="/" element={<Hero />} />
        <Route path="/cart" element={cartVisible && <Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:ID" element={<ProductDetails />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}
