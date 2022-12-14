import React, { useState } from "react";
import ArrowDown from "./img/arrowdown.svg";
import "./instruct.css";
import ArrowUp from "./img/ArrowUp.svg";

const InstructionModal = () => {
  const [modal, showModal] = useState(true);
  const showUp = () => {
    showModal((modal) => !modal);
  };
  return (
    <>
      <div className="flex items-center gap-3 mb-5" onClick={showUp}>
        <p className="text-[#000] text-sm md:text-[20px] font-bold">
          Read upload instructions
        </p>
        <img src={`${modal ? ArrowDown : ArrowUp}`} alt="arrow-down" />
      </div>

      <div
        className={`flex flex-col p-5 my-5 gap-5 bg-[#fff] ${
          modal ? "hide" : ""
        }`}
      >
        <p>Image Size should be 512 x 512px </p>
        <p>Photos with different expressions</p>
        <p>Look into the camera and also away</p>
        <p>No other people in your photos</p>
        <p>Photos at different time of the day</p>
        <p>If it is a couple photo, make sure every photo has both of you in it</p>
        <p>No duplicate photos</p>
        <p>No black and white photos</p>
        <p>No photo shoots</p>
        <p>Not only selfies</p>
        <p>No nudes</p>
        {/* <div>
          <p className="text-sm my-1.5">✅ No other people in your photos</p>
          <p className="text-sm my-1.5">✅ Photos with different expression</p>
          <p className="text-sm my-1.5">
            ✅ Photos in different locations, backgrounds and angles
          </p>
          <p className="text-sm my-1.5">✅ Only images - 512x512px</p>
          <p className="text-sm my-1.5">✅ Photos at different times of day</p>
          <p className="text-sm my-1.5">
            ✅ Look into the camera and also away
          </p>
          <p className="text-sm my-1.5">
            ✅ If couple, make sure EVERY photo has BOTH of you in it
          </p>
        </div> */}
        {/* <div>
          <p className="text-sm my-1.5">❌ No duplicate photos</p>
          <p className="text-sm my-1.5">❌ No black and white photos</p>
          <p className="text-sm my-1.5">❌ No photo shoots</p>
          <p className="text-sm my-1.5">❌ Not only selfies</p>
          <p className="text-sm my-1.5">❌ No children</p>
          <p className="text-sm my-1.5">❌ No nudes</p>
        </div> */}
      </div>
    </>
  );
};

export default InstructionModal;
