import React from "react";

function Course({ course }) {
  const { name, img, language, instructor } = course;
  return (
    <section className=" text-gray-900">
      <img
        src={img}
        alt={name}
        className="w-full h-60 object-cover object-center rounded-lg shadow-md"
      />

      <div className="relative px-4 -mt-16  ">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="mt-1 text-lg font-semibold uppercase leading-tight truncate">
            {name}
          </h4>

          <p className="mt-1 text-gray-600 text-lg m-0">
            <span className="text-sm text-gray-600">Language </span>
            <span className="text-teal-600 text-md font-semibold">
              {language}
            </span>
          </p>
          <p className="mt-1 text-lg">
            <span className="text-sm text-gray-600 m-0">Instructor </span>
            <span className="text-teal-600 text-md font-semibold">
              {instructor}
            </span>
          </p>
          <div class="w-full grid grid-col-12 gap-y-5 gap-x-2 mt-5">
            <button
              style={{ backgroundColor: "#00D3CD" }}
              className="text-white font-bold py-2"
            >
              Course Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
