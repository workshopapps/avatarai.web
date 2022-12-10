import PriceCardTwo from "./PriceCardTwo";
import React, { useState } from "react";
import PriceCardOne from "./PriceCardOne";
import PriceCardThree from "./PriceCardThree";
import PriceButton from "./PriceButton";

function TotalPriceCards() {
  const [toggle, setToggle] = useState(true);
  const myToggler = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <div>
      <PriceButton toggle={toggle} myToggler={myToggler} />
      <div className=" relative mt-10 mb-10 ">
        <div className="absolute lg:block hidden z-10 text-vnc_btn  -top-3 left-0 right-0 text-center">
          <p className="vnc_popular p-2 uppercase text-[#4D3899] font-bold rounded-lg w-fit mx-auto">
            Most Popular
          </p>
        </div>
        <div className="flex vnc_cap align-top justify-center items-top px-4 mt-4 gap-1 lg:gap-3">
          <PriceCardOne
            title="Basic Plan"
            amount={toggle ? "13.45" : `${(13.45 * 7.5).toFixed(2)}`}
            background="#170c3c"
            text="white"
            space="5rem"
            duration={toggle ? "month" : "year"}
            bg="white"
            top="1.5rem"
          />
          <PriceCardTwo
            title="Standard Plan"
            amount={toggle ? "25.45" : `${(25.45 * 7.5).toFixed(2)}`}
            top="1.5rem"
            background="white"
            duration={toggle ? "month" : "year"}
            text="#170c3c"
            bg="#170c3c"
            font="white"
          />
          <PriceCardThree
            title="Premium Plan"
            amount={toggle ? "49.45" : `${(49.45 * 7.5).toFixed(2)}`}
            background="#170c3c"
            text="white"
            duration={toggle ? "month" : "year"}
            space="5rem"
            bg="white"
            top="1.5rem"
          />
        </div>
      </div>
    </div>
  );
}

export default TotalPriceCards;
