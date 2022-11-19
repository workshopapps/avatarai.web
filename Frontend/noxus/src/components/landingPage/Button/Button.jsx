import React from "react";

const Button = ({ type = "submit", className = "", children }) => {
  return (
    <button
      type={type}
      className={
        `inline-flex justify-center items-center px-8 py-3 bg-purple-500 border border-purple-500  rounded-[8px] font-semibold text-md text-white
         transition ease-in-out duration-150 hover:bg-white hover:text-purple-500 hover:border-purple-500` +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
