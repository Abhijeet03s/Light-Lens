import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SpecImg from "../../assets/assets/hp-specs-1.png";
import Category from "../Category/Category";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Hero() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const { loggedInUser } = useContext(AuthContext);
  return (
    <>
      <div
        id="hero"
        className="max-w-full lg:min-h-[90vh] bg-color text-white flex flex-col lg:flex-row justify-center items-center font-Inter px-5 py-16 lg:px-20 lg:gap-x-5 relative"
      >
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="w-[100%] md:w-[50%] lg:w-[70%]"
        >
          <img
            className="object-cover w-full h-full"
            src={SpecImg}
            alt="homepage-spec-img"
          />
        </motion.div>

        <div className="flex flex-col justify-start items-center space-y-8">
          <motion.h1
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="text-5xl md:text-5xl lg:text-4xl xl:text-[50px] font-Poppins font-bolder mt-5 lg:mt-0"
          >
            <span className="text-[#4A99D3]">Discover</span> The World Of{" "}
            <span className="text-[#4A99D3]">Glasses</span>
          </motion.h1>
          <motion.p
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 1.1 }}
            className="text-md md:text-lg md:text-center lg:text-center lg:w-[80%]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum
            eius similique praesentium atque tempore incidunt ratione debitis
            itaque ullam!
          </motion.p>
          <motion.div
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 1.4 }}
            className="flex justify-between items-center space-x-5"
          >
            <Link to="/products">
              <button className="w-[160px] py-3 bg-[#4A99D3] shadow-lg hover:text-[#4A99D3] hover:bg-white transition duration-500 text-white lg:rounded-[50px]">
                Explore Shop
              </button>
            </Link>
            {loggedInUser ? (
              <Link to="/login">
                <button className="w-[160px] py-3 bg-[#4A99D3] shadow-lg hover:text-[#4A99D3] hover:bg-white transition duration-500 text-white lg:rounded-[50px]">
                  Buy Now
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="w-[160px] py-3 bg-[#4A99D3] shadow-lg hover:text-[#4A99D3] hover:bg-white transition duration-500 text-white lg:rounded-[50px]">
                  Buy Now
                </button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
      <Category />
    </>
  );
}
