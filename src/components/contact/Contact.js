import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact() {
  return (
    <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 gap-4 my-10">
      <section className="flex justify-center items-center">
        <article>
          <h3 className="text-3xl text-center">
            Connecting people with knowledge
          </h3>
          <p className="flex justify-center items-center text-lg">
            <HiLocationMarker /> Savar, Dhaka
          </p>
          <p className="flex justify-center items-center text-lg">
            <MdOutlineEmail /> learning.time@example.com
          </p>
          <p className="flex justify-center items-center text-lg">
            <BsFillTelephoneFill /> +880195151111
          </p>
          <p className="flex justify-center items-center text-lg">
            <CgWebsite /> www.learning-time.com
          </p>
        </article>
      </section>
      <form class="p-5 md:p-0">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Sohag"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="hosen"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="learning.time@example.com"
              type="email"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <textarea
              class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              placeholder="Describe yourself here..."
            ></textarea>
          </div>
        </div>
        <div class="w-full grid grid-col-12 gap-y-5 gap-x-2 ">
          <button
            style={{ backgroundColor: "#00D3CD" }}
            className="text-white font-bold py-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
