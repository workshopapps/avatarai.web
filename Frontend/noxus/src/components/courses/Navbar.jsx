import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImgs from "../courses/images/logo.png";
import Menu from "../courses/images/menu.png";
import Search from "../courses/images/Search.png";
import Profile from "../courses/images/profiledp.png";
import Bell from "../courses/images/Group.png";
import '../courses/courses.css'


const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const navOpener = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <div className="relative z-[1000]">
      <div className="shadow-sm fixed top-0 left-0 nav w-full m-auto">
        <div className="bg-white py-5 flex items-center md:justify-between px-[2rem] md:px-[3rem]">
          <Link to="/">
            <div className="font-bold cursor-pointer">
              <span>
                <div className="max-h-[3rem] max-w-[9rem]">
                  <img src={LogoImgs} alt="Logo" className="w-full h-full" />
                </div>
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 justify-between bg-[#fff] py-2 px-4 ml-[20%] md:ml-0 rounded-[4px] border-[1px] border-[#B5B5B5] overflow-hidden max-w-[153px] md:max-w-[285px]">
            <img src={Search} alt="search" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-transparent placeholder:text-[#8D9091] placeholder:text-sm"
            />
          </div>

          <div
            onClick={navOpener}
            className="text-2xl p-2 absolute right-5 top-5 cursor-pointer md:hidden transition-all ease-in-out delay-150 duration-300"
          >
            <img src={Menu} alt="menu" />
          </div>

          <ul
            className={`flex flex-col md:flex-row items-center z-[-1] transition-all delay-100 duration-600 ease-in-out 
            justify-center md:justify-between md:space-x-[2rem] lg:space-x-[10rem] text-center pb-20 md:pb-0 
            absolute top-0 left-0 md:static bg-gray-100 md:bg-white text-black
             md:z-auto w-full md:w-auto h-screen md:h-auto ${
               openNav ? "top-[60px] opacity-100" : "top-[-700px] opacity-0"
             } md:opacity-100`}
          >
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div>
                <img src={Bell} alt="notification" />
              </div>

              <div className="flex items-center justify-between gap-1">
                <img src={Profile} alt="George Lucas" />
                <p className="font-bold text-[#333333]">George Lucas</p>
              </div>

              <div className="flex md:hidden flex-col justify-center gap-3 mt-4">
                <Link
                  to="/"
                  className="font-semibold text-[#fff] px-2 py-1 rounded-md hover:font-bold bg-[#333333] cursor-pointer"
                  onClick={() => setOpenNav(!openNav)}
                >
                  Upcoming Tests
                </Link>
                <Link
                  to="/"
                  className="font-semibold text-[#fff] px-2 py-1 rounded-md hover:font-bold bg-[#333333] cursor-pointer"
                  onClick={() => setOpenNav(!openNav)}
                >
                  Tasks Progress
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
