import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/tapart.png";
import menu from "../../../assets/images/menu.png";
import Button from "../Button/Button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const navHandler = () => {
    setNavToggle((navToggle) => !navToggle);
  };
  const navClose = () => {
    setNavToggle(false);
  };
  return (
    <Fragment>
      <nav className="flex justify-between items-center lg:px-20 md:px-8 py-5">
       <img src={logo} alt="" className="w-10 hidden md:block" />
        <img
          src={menu}
          alt=""
          className="md:hidden mx-10"
          onClick={navHandler}
        />

        <ul className="md:flex justify-between items-center gap-2  lg:gap-10 hidden cursor-pointer clamp">
          <li className="p-2  border-b-white border-b hover:border-opacity-100 hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
            <Link to="/"> Home</Link>
          </li>
          <li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple clamp">
            <Link to="/Aboutus">About Us</Link>
          </li>
          <li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple clamp">
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple clamp">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
            <Link to="/FAQ">FAQs</Link>
          </li>
        </ul>
        <div className="space-x-6 hidden md:block">
        <button className="inline-flex justify-center items-center px-4 py-2  border border-purple  
          rounded-[8px] font-semibold text-md text-purple bg-white transition ease-in-out duration-150 border-purple text-purple w-full" >
          <Link to="/Login">  Log in</Link>
          </button>
          
          

          <Button className="text-white border-purple bg-purple ">
            <Link to="/Signupfirst"> Sign up </Link>
          </Button>
        </div>
      </nav>

      {navToggle && <MobileNav navClose={navClose}/>}
    </Fragment>
  );
};

export default Navbar;
