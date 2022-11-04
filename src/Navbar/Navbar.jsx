import { Link } from "react-router-dom";

export default function Navbar({ toggle }) {
  return (
    <>
      <nav className="container mx-auto max-w-full h-[80px] flex justify-between items-center px-6 lg:px-14 bg-white">
        <div>
          <Link to="/">
            <img src="/assets/LIGHTLENS.svg" alt="brand-logo" />
          </Link>
        </div>
        <div className="hidden lg:flex justify-between items-center gap-x-10">
          <ul className="lg:flex lg:items-center lg:gap-x-10">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/products">
              <li>Products</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
          <div className="lg:flex gap-x-10">
            <button>
              <img className="w-7" src="/assets/login.svg" alt="" />
            </button>
            <button>
              <img className="w-7" src="/assets/cart.svg" alt="" />
            </button>
          </div>
        </div>
        <svg
          onClick={toggle}
          className="w-8 h-8 hover:text-[#0C1821] transition-colors md:hidden cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </nav>
    </>
  );
}
