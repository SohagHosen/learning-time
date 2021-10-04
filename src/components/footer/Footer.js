import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-10 " style={{ backgroundColor: "#00D3CC" }}>
      <div className="container flex flex-col  mx-auto md:p-8 lg:flex-row ">
        <nav className="self-center space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <NavLink
            to="/"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-600 mr-4"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-600 mr-4"
          >
            About US
          </NavLink>
          <NavLink
            to="/services"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-600 mr-4"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-600 mr-4"
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4 text-white text-lg">
            <AiFillFacebook />
            <FaInstagramSquare />
            <FaTwitterSquare />
            <ImLinkedin />
          </div>
        </div>
      </div>
      <article className="text-center pb-5 text-white">
        ©2021 All rights reserved <span>Learning Time</span>
      </article>
    </footer>
  );
}

export default Footer;
