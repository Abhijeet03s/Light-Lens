import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import Footer from "./components/Footer/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import { useContext } from "react";
import { DataContext } from "./context/Context";

export default function App() {
  const { cartItems, cartVisible, toggleCart } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hamburgerMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
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
      <AuthContextProvider>
        <HamburgerMenu isOpen={isOpen} toggle={toggle} />
        {!isOpen && (
          <div>
            <Navbar toggle={toggle} />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:ID" element={<ProductDetails />} />
              <Route path="/cart" element={cartVisible && <Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
          </div>
        )}
      </AuthContextProvider>
    </>
  );
}
