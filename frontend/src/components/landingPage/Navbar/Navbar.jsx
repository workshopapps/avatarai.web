import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/tapart.png";
import menu from "../../../assets/images/menu.png";
import Button from "../Button/Button";
import MobileNav from "./MobileNav";
import './nav.css'

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
      <nav className="flex justify-between items-center max-w-[100%]  lg:px-16   py-5 cbk-ds-nav">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="w-10 hidden lg:block" />
          </Link>
          <div className="flex justify-between cbk-mobile-board  lg:hidden pr-3">
            <img
              src={menu}
              alt=""
              className=" mx-5 my-1"
              onClick={navHandler}
            />
            <Button className="text-white border-purple-500 bg-purple-500 cbk-login-btn">
            <Link to="/Signupfirst"> Create avatars </Link>
          </Button>
          </div>
        </div>

        <ul className="lg:flex justify-between items-center gap-2  lg:gap-5 hidden cursor-pointer w-1/2 cbk-links">
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
          <Button className=" border-purple-500 text-purple-500 bg-white  cbk-login-btn ">
            <Link to="/login"> Log in</Link>
          </Button>

          <Button className="text-white border-purple-500 bg-purple-500 cbk-login-btn ">
            <Link to="/Signupfirst"> Sign up </Link>
          </Button>
        </div>
      </nav>
      {navToggle && <MobileNav navClose={navClose} />}
    </Fragment>
  );
};

export default Navbar;
