import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiHeart, FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/svg/Logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Plant Care", path: "/plant-care" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center space-x-2 shrink-0">
              <img src={Logo} alt="GreenShop" />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-medium relative group ${
                      isActive
                        ? "text-green-600"
                        : "text-gray-700 hover:text-green-600"
                    }`
                  }
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <button className="p-2 text-gray-700 hover:text-green-600">
                <FiSearch className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <NavLink
                to="/favorites"
                className="relative p-2 text-gray-700 hover:text-green-600"
              >
                <FiHeart className="w-5 h-5 sm:w-6 sm:h-6" />
              </NavLink>

              <NavLink
                to="/cart"
                className="relative p-2 text-gray-700 hover:text-green-600"
              >
                <FiShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              </NavLink>

              <button className="hidden sm:flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium">
                Login
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 ${
          isMenuOpen ? "" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex items-center justify-between border-b">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-2"
            >
              <img src={Logo} alt="GreenShop" className="w-8 h-8" />
              <span className="font-bold">GREENSHOP</span>
            </Link>

            <button onClick={() => setIsMenuOpen(false)}>
              <FiX className="w-6 h-6" />
            </button>
          </div>

          <nav className="p-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-base py-2 ${
                    isActive ? "text-green-600" : "text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t">
            <button className="w-full bg-green-600 text-white px-4 py-2 rounded">
              Login
            </button>
          </div>
        </aside>
      </div>

      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Header;
