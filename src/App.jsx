import React, { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Landing from "./components/Landing/Landing";
import Aboutus from "./components/AboutUs/Aboutus";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import Footer from "./components/Footer/Footer";
import Logo from "./assets/images/logo-color.svg";
import { motion, AnimatePresence } from "framer-motion";

function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <img src={Logo} alt="LightLens" className="w-48 mb-8" />
    </div>
  );
}

function AppContent() {
  const { loading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatePresence>
      {loading ? (
        <LoadingSpinner key="spinner" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HamburgerMenu isOpen={isOpen} toggle={toggle} />
          {!isOpen && (
            <div>
              <Navbar toggle={toggle} />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:ID" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
              {!isMobile && <Footer />}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <AppContent />
    </AuthContextProvider>
  );
}