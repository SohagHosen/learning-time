import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
function Nav() {
  return (
    <header style={{ backgroundColor: "#18a7a4" }}>
      <nav className="flex items-center justify-between flex-wrap  p-3 container mx-auto">
        <div className="flex items-center  text-white mr-6 ">
          <img className="h-10" src={logo} alt="" />
          <span className="font-semibold text-2xl tracking-tight">
            Learning Time
          </span>
        </div>
        <div className="block md:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full  md:flex md:justify-end  md:w-auto">
          <div className="md:flex-grow text-lg">
            <NavLink
              to="/"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
