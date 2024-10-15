import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Category from "../Category/Category";
import specImg from "../../assets/images/spec-hero-image.png";

export default function Landing() {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <>
      <div className="relative max-w-full lg:min-h-[90vh] bg-gradient-to-br from-[#1a365d] to-[#3b82f6] text-white font-Inter overflow-hidden flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full filter blur-[120px] transform -translate-x-1/4 -translate-y-1/4"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full filter blur-[120px] transform translate-x-1/4 translate-y-1/4"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-400/20 rounded-full filter blur-[130px] transform -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center px-5 py-16 lg:px-20 lg:gap-x-5">
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
            className="w-full md:w-1/2 lg:w-[45%] mb-10 lg:mb-0"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateZ: [-1, 1, -1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  className="object-cover w-full h-full drop-shadow-2xl"
                  src={specImg}
                  alt="Premium Eyewear Collection"
                />
              </motion.div>
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-white/20 rounded-tl-2xl sm:rounded-tl-3xl"></div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-white/20 rounded-br-2xl sm:rounded-br-3xl"></div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-start items-center space-y-8 lg:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-Libre font-bold text-center leading-normal md:leading-snug xl:leading-tight"
            >
              Discover The World Of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Premium Eyewear
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-md md:text-lg text-center text-blue-100 lg:w-[90%]"
            >
              Elevate your style and vision with our curated collection of premium eyewear.
              From classic designs to cutting-edge fashion, find your perfect pair today.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-5 w-full"
            >
              <Link to="/products" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3 bg-white text-primary border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                  <span>Explore Collection</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
              <Link to={loggedInUser ? "/products" : "/login"} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3 bg-transparent backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                  <span>{loggedInUser ? "Shop Now" : "Login & Shop"}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-[-2px] transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <Category />
    </>
  );
}
