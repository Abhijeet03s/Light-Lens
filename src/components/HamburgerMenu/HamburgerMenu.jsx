import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Logo from "../../assets/images/LIGHTLENS-nav.svg";

export default function HamburgerMenu({ isOpen, toggle }) {
  const { loggedInUser, handleLogOut } = useContext(AuthContext);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/products", text: "Products" },
    { to: "/services", text: "Services" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center mb-8">
          <img className="h-4 w-auto" src={Logo} alt="LightLens logo" />
          <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-7 h-7 text-gray-600"
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
          </button>
        </div>
        <ul className="flex flex-col items-start gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={toggle}
                className={({ isActive }) =>
                  `text-xl font-medium ${isActive ? 'text-[#4A99D3]' : 'text-gray-600'
                  } hover:text-[#4A99D3] transition-colors`
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
          {loggedInUser ? (
            <li>
              <button
                onClick={() => {
                  handleLogOut();
                  toggle();
                }}
                className="text-xl font-medium text-gray-600 hover:text-[#4A99D3] transition-colors"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                onClick={toggle}
                className={({ isActive }) =>
                  `text-xl font-medium ${isActive ? 'text-[#4A99D3]' : 'text-gray-600'
                  } hover:text-[#4A99D3] transition-colors`
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
