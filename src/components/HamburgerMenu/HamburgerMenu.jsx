import { Link } from "react-router-dom";
import Logo from "../../assets/assets/LIGHTLENS-nav.svg";

export default function HamburgerMenu({ isOpen, toggle }) {
  return (
    <>
      <nav
        className={
          isOpen ? "w-full bg-[#f4f4f4] px-6 font-Inter font-medium" : "hidden"
        }
      >
        <div className="container mx-auto w-full h-[80px] flex justify-between items-center">
          <div>
            <img
              className="w-44"
              src={Logo}
              alt="brand-logo"
            />
          </div>
          <svg
            onClick={toggle}
            className="w-8 h-8 hover:text-[#0C1821]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul className="flex flex-col items-start gap-7">
          <Link to="/">
            <li
              onClick={toggle}
              className="text-lg text-gray-600 hover:text-[#4A99D3] transition-colors"
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              onClick={toggle}
              className="text-lg text-gray-600 hover:text-[#4A99D3] transition-colors"
            >
              About
            </li>
          </Link>
          <Link to="/services">
            <li
              onClick={toggle}
              className="text-lg text-gray-600 hover:text-[#4A99D3] transition-colors"
            >
              Services
            </li>
          </Link>
          <Link to="/products">
            <li
              onClick={toggle}
              className="text-lg text-gray-600 hover:text-[#4A99D3] transition-colors"
            >
              Products
            </li>
          </Link>
          <Link to="/login">
            <li
              onClick={toggle}
              className="text-lg text-gray-600 hover:text-[#4A99D3] transition-colors"
            >
              Signin
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
