import { Link } from "react-router-dom";

export default function HamburgerMenu({ isOpen, toggle }) {
  return (
    <>
      <nav
        className={
          isOpen
            ? "bg-white w-full fixed inset-0 flex flex-col items-start justify-start gap-5 px-6 font-Inter"
            : "hidden"
        }
      >
        <div className="container mx-auto w-full h-[80px] flex justify-between items-center bg-white">
          <div>
            <img src="/assets/LIGHTLENS.svg" alt="brand-logo" />
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
              className="text-lg text-gray-600 hover:text-[#0C1821] transition-colors"
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              onClick={toggle}
              className="text-lg text-gray-600 hover:text-[#0C1821] transition-colors"
            >
              About
            </li>
          </Link>
          <Link to="/products">
            <li
              onClick={toggle}
              className="text-lg text-gray-600 hover:text-[#0C1821] transition-colors"
            >
              Products
            </li>
          </Link>
          <Link to="/contact">
            <li
              onClick={toggle}
              className="text-lg text-gray-600 hover:text-[#0C1821] transition-colors"
            >
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
