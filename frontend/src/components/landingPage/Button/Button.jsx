import React from "react";

const Button = ({ type = "submit", className = "", children }) => {
  return (
    <button
      type={type}
      className={
        `inline-flex justify-center items-center px-8 py-3 border   rounded-[8px] font-semibold text-md 
         transition ease-in-out duration-150 ` +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
