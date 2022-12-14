import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink, Link, useLocation } from 'react-router-dom';
import menu from '../../../assets/images/menu.svg';
import tapart from "../../../assets/images/tapart.svg";
import Button from '../Button/Button';
import MobileNav from './MobileNav';
import './nav.css';
import { useAuth } from '../../../../context/auth-context';

const Navbar = () => {
	const [navToggle, setNavToggle] = useState(false);
	const auth = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const navHandler = () => {
		setNavToggle((navToggle) => !navToggle);
	};
	const navClose = () => {
		setNavToggle(false);
	};

	return (
    <Fragment>
      <nav className="flex justify-between items-center max-w-[100%]  lg:px-16 py-2  md:py-5 cbk-ds-nav">
        <div>
          <Link to="/">
            <img
              src={tapart}
              alt=""
              className="w-10 hidden lg:block"
            />
          </Link>
          <div className="flex justify-between cbk-mobile-board  lg:hidden pr-3">
            <img
              src={menu}
              alt=""
              className=" mx-5 my-1"
              onClick={navHandler}
            />

            <span>
              <Link to="/login">
                <Button className="text-white border-[#8B70E9] bg-[#8B70E9] cbk-login-btn">
                  Create avatars
                </Button>
              </Link>
            </span>
          </div>
        </div>

        <ul className="lg:flex justify-between items-center gap-2  lg:gap-5 hidden cursor-pointer w-1/2 cbk-links">
          <li className="p-2  border-b-white border-b hover:border-opacity-100 hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
            <NavLink
              to="/"
              className={
                location.pathname === "/"
                  ? "text-[#8B70E9]"
                  : "hover:text-[#8B70E9]"
              }
              end
            >
              {" "}
              Home
            </NavLink>
          </li>
          <li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple clamp">
            <NavLink
              to="/aboutus"
              className={
                location.pathname === "/aboutus"
                  ? "text-[#8B70E9]"
                  : "hover:text-[#8B70E9]"
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple clamp">
            <NavLink
              to="/pricing"
              className={
                location.pathname === "/pricing"
                  ? "text-[#8B70E9]"
                  : "hover:text-[#8B70E9]"
              }
            >
              Pricing
            </NavLink>
          </li>
          {/* <li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
						<Link to="/contactus" 
						className={ page === pages.ContactUs ? "text-[#8B70E9]" :"hover:text-[#8B70E9]" }
						>Contact Us</Link>
					</li>
					<li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
						<Link to="/faq" 
						className={ page === pages.Faqs ? "text-[#8B70E9]" :"hover:text-[#8B70E9]" }
						>FAQs</Link>
					</li> */}
        </ul>
        <div className="space-x-6 hidden lg:block">
          {auth.token === null ? (
            <>
              <Link to="/login">
                <Button className=" border-[#8B70E9] text-[#8B70E9] bg-white  cbk-login-btn ">
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="text-white border-[#8B70E9] bg-[#8B70E9] cbk-login-btn ">
                  Sign up
                </Button>
              </Link>
            </>
          ) : (
            <span>
              <Link to="/dashboard">
                <Button className="text-white border-[#8B70E9] bg-[#8B70E9] cbk-login-btn">
                  Create avatars
                </Button>
              </Link>
            </span>
          )}
        </div>
      </nav>
      {navToggle && <MobileNav navClose={navClose} />}
    </Fragment>
  );
};

export default Navbar;
