import React from "react";

const Button = ({ type = "submit", className = "", children }) => {
  return (
    <button
      type={type}
      className={
        `inline-flex justify-center items-center px-5 py-2 md:px-8 md:py-3 border rounded-[8px] font-semibold 
         transition ease-in-out duration-150 ` +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
