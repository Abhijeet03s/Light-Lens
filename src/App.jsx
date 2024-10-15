import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";

import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Footer from "./components/Footer/Footer";
import Logo from "./assets/images/website-logo-color.svg";
import { motion, AnimatePresence } from "framer-motion";

const Aboutus = lazy(() => import("./components/AboutUs/Aboutus"));
const Products = lazy(() => import("./components/Products/Products"));
const ProductDetails = lazy(() => import("./components/ProductDetails/ProductDetails"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Login = lazy(() => import("./components/Login/Login"));
const Signup = lazy(() => import("./components/SignUp/Signup"));

const LoadingSpinner = () => (
  <div className="flex flex-col justify-center items-center h-screen bg-white">
    <img src={Logo} alt="LightLens" className="w-48 mb-8" />
  </div>
);

const AppContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && isOpen) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <AnimatePresence>
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
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:slug" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </Suspense>
            {!isMobile && <Footer />}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <AuthContextProvider>
    <AppContent />
  </AuthContextProvider>
);

export default App;