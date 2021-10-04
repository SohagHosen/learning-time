import React from "react";
import teacher from "../../assets/image/teacher.jpg";
import Box from "./Box";
function About() {
  return (
    <section className="container mx-auto p-5">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <article className="flex justify-center items-center">
          <div>
            <h2 className="text-5xl font-bold">
              We share knowledge with the world
            </h2>
            <p className="text-md mt-5">
              Whether you want to learn or to share what you know, you’ve come
              to the right place. As a global destination for online learning,
              we connect people through knowledge.
            </p>
          </div>
        </article>
        <section className="flex justify-center items-center">
          <img src={teacher} alt="" />
        </section>
      </div>
      <section className="bg-green-100 p-5 rounded grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <Box number={16600} title="Course enrollments" />
        <Box number={790} title="Instructors" />
        <Box number={45} title="Languages" />
        <Box number={150} title="Courses" />
      </section>
    </section>
  );
}

export default About;
