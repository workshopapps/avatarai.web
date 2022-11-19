import React from "react";

const Button = ({ type = "submit", className = "", children }) => {
  return (
    <button type={type} 
    className={`inline-flex items-center px-8 py-3 bg-gray-900 border border-transparent rounded-md font-semi-bold text-md text-white transition ease-in-out duration-150` + className}>
      {children}
    </button>
  );
};

export default Button;
