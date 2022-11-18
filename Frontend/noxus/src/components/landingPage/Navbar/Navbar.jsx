import React from "react";
import logo from "../../../assets/images/tapart.png";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-20 py-5">
      <img src={logo} alt="" className="w-10" />
      <ul className="flex justify-between gap-10">
        <li>Home</li>
        <li>About Us</li>
        <li>Pricing</li>
        <li>Contact Us</li>
        <li>FAQs</li>
      </ul>
      <div className="space-x-3">
        <Button className=" bg-white border-purple-700 text-purple-600 ">
          Log in
        </Button>

        <Button className="text-white bg-purple-600">Sign up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
