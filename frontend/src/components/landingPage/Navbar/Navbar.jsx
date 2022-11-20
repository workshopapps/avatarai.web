import React from "react";
// import logo from "../../../assets/images/logos.png";
// import menu from "../../../assets/images/menu.png";
import logo from './../img/logo.png'
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center lg:px-20 md:px-10 py-5">
      <img src={logo} alt="" className="w-10 hidden md:block" />
      {/* <img src={menu} alt="" className="md:hidden mx-10" /> */}
      <ul className="md:flex justify-between items-center gap-10 hidden">
        <li className="p-2  border-opacity-0 hover:border-opacity-100 hover:text-purple-500 hover:border-b-purple-500 active:border-b-purple-500 active:text-purple-500">Home</li>
        <li className="p-2 border-b hover:text-purple-500 hover:border-b-purple-500 active:border-b-purple-500 active:text-purple-500">About Us</li>
        <li className="p-2 border-b hover:text-purple-500 hover:border-b-purple-500 active:border-b-purple-500 active:text-purple-500">Pricing</li>
        <li className="p-2 border-b hover:text-purple-500 hover:border-b-purple-500 active:border-b-purple-500 active:text-purple-500">Contact Us</li>
        <li className="p-2 border-b hover:text-purple-500 hover:border-b-purple-500 active:border-b-purple-500 active:text-purple-500">FAQs</li>
      </ul>
      <div className="space-x-6 hidden md:block">
        <Button className=" bg-white border-purple-700 text-purple-600 ">
          Log in
        </Button>

        <Button className="text-white bg-purple-600">Sign up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
