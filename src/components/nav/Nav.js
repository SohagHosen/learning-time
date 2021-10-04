import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";

import logo from "../../assets/image/logo.png";
function Nav() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <header style={{ backgroundColor: "#00D3CE" }}>
      <nav className="flex items-center justify-between flex-wrap  p-3 container mx-auto">
        <Link to="/">
          <div className="flex items-center  text-white mr-6 ">
            <img className="h-10" src={logo} alt="" />
            <span className="font-semibold text-2xl tracking-tight">
              Learning Time
            </span>
          </div>
        </Link>
        <div className="block md:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <RiMenu3Line />
          </button>
        </div>
        <div
          className={`w-full  md:flex md:justify-end md:w-auto  ${
            toggle ? "block" : "hidden"
          }`}
        >
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
              About US
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
