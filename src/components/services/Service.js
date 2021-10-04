import React from "react";
function Service({ img, title, description }) {
  return (
    <section className="m-5 md:m-0">
      <div class="mx-auto  rounded overflow-hidden shadow-lg">
        <img class="w-full" src={img} alt={title} />
        <div class="px-6 ">
          <div class="font-bold text-xl mb-2">{title}</div>
          <p class="text-gray-700 text-base">{description}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            Find courses
          </button>
        </div>
      </div>
    </section>
  );
}

export default Service;
