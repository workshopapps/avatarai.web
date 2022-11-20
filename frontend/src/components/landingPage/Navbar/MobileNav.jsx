import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../../assets/images/logos.png";


const MobileNav = ({navClose}) => {

  return (
    <div className="bg-white w-[261px] h-screen  fixed top-0 left-0 md:hidden  ">
      <nav className="flex flex-col justify-center  items-start gap-y-10 md:hidden p-10 py-20 h-full ">
        <img src={logo} alt="" />
        <ul className=" flex flex-col justify-between items-start gap-10 cursor-pointer ">
          <li onClick={navClose}  className="p-2  border-b-white border-b hover:border-opacity-100 hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
           <Link to='/home'> Home</Link>
          </li>
          <li onClick={navClose} className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
            <Link to='/about-us'>About Us</Link>
          </li>
          <li  onClick={navClose} className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
           <Link to='/pricing'>Pricing</Link>
          </li>
          <li onClick={navClose} className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
           <Link to='/contact-us'>Contact Us</Link> 
          </li>
          <li onClick={navClose} className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
            <Link to='/faqs'>FAQs</Link>
          </li>
        </ul>
        <div className=" w-full flex flex-col items-start justify-start gap-y-10 ">
          <Button className=" border-purple text-purple w-full ">
            Log in
          </Button>
        

          <Button className="text-white bg-purple w-full">Sign up</Button>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
