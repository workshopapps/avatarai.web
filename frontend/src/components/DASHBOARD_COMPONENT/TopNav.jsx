import MenuIcon from './img/menu.svg';
import Logo from './img/logo.svg';
import Dashboardtranslate from './dashboardtranslate';
import ArrowDown from "./img/arrowdown.svg";
import "./instruct.css";
import { useState } from "react";


export const TopNav = ({ title, text, show, setShow }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  console.log(user)
  const [modal, showModal] = useState(true);
  const showUp = () => {
    showModal((modal) => !modal);
  };
  return (
    <div className="mb-[60px] bg-[#FAFAFA]">
      <nav className="xl:pl-6">
        <div className="flex items-center justify-between mb-[40px] py-5 xl:py-0 fixed top-0 bg-[#FAFAFA] xl:relative w-full xl:mb-0 ">
          <div className="">
            <div className="text-gray-600 visible xl:hidden relative" onClick={() => setShow(!show)}>
              {show ? ' ' : <img src={MenuIcon} alt="Menu" className='md:w-[40px] md:h-[40px]' />}
            </div>
          </div>

          <img src={Logo} alt="Logo" className="xl:hidden block" />

          <div></div>
        </div>

        <div className="flex items-center justify-between pt-[50px] xl:pt-0 gap-5">
          <div>
            <h1 className="text-[24px] md:text-[40px] text-[#000] font-bold">{title} {user?.username}</h1>
            <p className="text-[#6c6c6c] text-sm md:text-[18px]">{text}</p>
          </div>

          <div>
            <Dashboardtranslate />
          </div>
        </div>
        <div className="flex items-center gap-3 mt-[40px]">
          <p className="text-[#000] text-sm md:text-[20px] font-bold">
            Read upload instructions
          </p>
          <img src={ArrowDown} alt="arrow-down" onClick={showUp} />
        </div>

        <div
          className={`flex items-center p-5 my-5 gap-5  bg-[#fff] ${modal ? "hide" : ""
            }`}
        >
          <div>
            <p className="text-sm my-1.5">✅ No other people in your photos</p>
            <p className="text-sm my-1.5">
              ✅ Photos with different expression
            </p>
            <p className="text-sm my-1.5">
              ✅ Photos in different locations, backgrounds and angles
            </p>
            <p className="text-sm my-1.5">✅ Only images - 512x512px</p>
            <p className="text-sm my-1.5">
              ✅ Photos at different times of day
            </p>
            <p className="text-sm my-1.5">
              ✅ Look into the camera and also away
            </p>
            <p className="text-sm my-1.5">
              ✅ If couple, make sure EVERY photo has BOTH of you in it
            </p>
          </div>
          <div>
            <p className="text-sm my-1.5">❌ No duplicate photos</p>
            <p className="text-sm my-1.5">❌ No black and white photos</p>
            <p className="text-sm my-1.5">❌ No photo shoots</p>
            <p className="text-sm my-1.5">❌ Not only selfies</p>
            <p className="text-sm my-1.5">❌ No children</p>
            <p className="text-sm my-1.5">❌ No nudes</p>
          </div>
        </div>
      </nav>
    </div>
  )
};