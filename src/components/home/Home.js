import React, { useState, useEffect } from "react";
import Course from "../course/Course";
import HeroSection from "../heroSection/HeroSection";

function Home({ courses }) {
  const [first6, setFirst6] = useState([]);
  useEffect(() => {
    const newCourse = courses.slice(0, 6);
    setFirst6(newCourse);
  }, [first6]);

  return (
    <section>
      <HeroSection />
      <section className="container mx-auto">
        <article className="text-center my-10">
          <h3 className="text-5xl font-bold">Always something new to learn</h3>
          <p className="text-lg mt-5">
            With courses added regularly to our catalog, you always get the
            latest skills.
          </p>
        </article>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {first6.map((course) => (
            <Course course={course} />
          ))}
        </section>
      </section>
    </section>
  );
}

export default Home;
