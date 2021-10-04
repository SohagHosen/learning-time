import React from "react";
import Service from "./Service";
import web from "../../assets/image/web-dev.jpg";
import app from "../../assets/image/app-dev.png";
import desk from "../../assets/image/desktop-app.jpg";
import Course from "../course/Course";
function Services({ courses }) {
  return (
    <section className="container mx-auto text-center my-10">
      <h4 className="text-5xl font-bold">Our Services</h4>
      <p>We provide the best teachers for our students.</p>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Service
          img={web}
          title="Web development Courses"
          description="Web development is the work involved in developing a Web site for the Internet or an intranet"
        />
        <Service
          img={app}
          title="App development Courses"
          description="Mobile app development is the act or process by which a mobile app is developed for mobile devices"
        />
        <Service
          img={desk}
          title="Desktop development Courses"
          description="Desktop development implies the creation of software applications that perform on computers"
        />
      </section>
      <article className="my-10">
        <h4 className="text-5xl font-bold py-5">Our Courses</h4>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <Course course={course} />
          ))}
        </section>
      </article>
    </section>
  );
}

export default Services;
