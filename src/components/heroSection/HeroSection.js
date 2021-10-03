import React from "react";
import headerImg from "../../assets/image/header.svg";
function HeroSection() {
  return (
    <section className="container mx-auto md:flex  items-center text-left w-full justify-between mt-12 p-2">
      <section className="flex items-center md:w-1/2">
        <p className="lg:text-lg mt-4">
          <span className="font-bold text-4xl" style={{ color: "#00D3CE" }}>
            Learning Time
          </span>
          <br /> isn’t just a place to take classes that are like college
          courses—it actually offers real academic courses from real professors
          and universities at a fraction of the cost of getting an online
          degree.
        </p>
      </section>
      <div className="mt-8 lg:mt-0 md:w-1/2">
        <img className="w-full h-96 mr-96" src={headerImg} alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
