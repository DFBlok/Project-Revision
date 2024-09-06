import React from "react";
import { BsArrowRight } from "react-icons/bs";

export const Button = () => {
  return (
    <div className="flex  justify-center items-center w-full md:w-auto md:block gap-4 bg-purple-500 hover:bg-blue-700 text-black md:text-xl font-bold py-2 px-4 rounded-xl">
      <span>Contact us</span>
      <BsArrowRight />
    </div>
  );
};

export default Button;
