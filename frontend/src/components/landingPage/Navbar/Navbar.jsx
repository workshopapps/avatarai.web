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

        <div>
          <Link to="/">
            <img src={logo} alt="" className="w-10 hidden lg:block" />
          </Link>
          <img
            src={menu}
            alt=""
            className="lg:hidden mx-10"
            onClick={navHandler}
          />
        </div>


        <ul className="lg:flex justify-between items-center gap-2  lg:gap-5 hidden cursor-pointer ">
          <li className="p-2  border-b-white border-b hover:border-opacity-100 hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
            <Link to="/"> Home</Link>
          </li>
          <li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple clamp">
            <Link to="/Aboutus">About Us</Link>
          </li>
          <li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple clamp">
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
            <Link to="/FAQ">FAQs</Link>
          </li>
        </ul>
        <div className="space-x-6 hidden lg:block">
          <Button className=" border-purple-500 text-purple-500 bg-white ">
            <Link to="/login">  Log in</Link>
          
          </Button>

          <Button className="text-white border-purple-500 bg-purple-500 ">
            <Link to="/Signupfirst"> Sign up </Link>
          </Button>
        </div>
      </nav>

      {navToggle && <MobileNav navClose={navClose} />}
    </Fragment>
  );
};

export default Navbar;
