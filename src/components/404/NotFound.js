import React from "react";
import { useHistory } from "react-router-dom";
function NotFound() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <div class="">
        <div class="w-9/12 m-auto py-10 flex items-center justify-center">
          <div class="">
            <div class=" text-center ">
              <h1
                class="text-6xl md:text-9xl font-bold m-0"
                style={{ color: "#00D3CE" }}
              >
                404
              </h1>
              <h1 class="text-3xl md:text-6xl font-medium py-3">
                oops! Page not found
              </h1>
              <p class="md:text-2xl text-lg pb-8 px-12 font-medium">
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <button
                onClick={handleClick}
                class="bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
