import React from "react";

function Box({ number, title }) {
  return (
    <article
      style={{ backgroundColor: "#00D3CE" }}
      className=" flex justify-center items-center h-48"
    >
      <div className="text-center font-bold text-white">
        <h3 className="text-4xl"> {number} </h3>
        <h4 className="text-3xl"> {title}</h4>
      </div>
    </article>
  );
}

export default Box;
