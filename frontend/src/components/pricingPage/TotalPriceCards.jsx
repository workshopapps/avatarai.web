import PriceCardTwo from "./PriceCardTwo";
import React from "react";
import PriceCardOne from "./PriceCardOne";
import PriceCardThree from "./PriceCardThree";

function TotalPriceCards() {
  return (
    <div className=" relative mt-10 mb-10 ">
      <div className="absolute lg:block hidden z-10 text-vnc_btn  -top-3 left-0 right-0 text-center">
        <p className="vnc_popular p-2 uppercase text-[#4D3899] font-bold rounded-lg w-fit mx-auto">
          Most Popular
        </p>
      </div>
      <div className="flex vnc_cap align-top justify-center items-top px-4 mt-4 gap-1 lg:gap-3">
        <PriceCardOne
          title="Basic"
          amount="$13.45"
          background="#170c3c"
          text="white"
          space="5rem"
          bg="white"
          top="1.5rem"
        />
        <PriceCardTwo
          title="Standard"
          amount="$25.45"
          top="1.5rem"
          background="white"
          text="#170c3c"
          bg="#170c3c"
          font="white"
        />

        <PriceCardThree
          title="Premium"
          amount="$49.45"
          background="#170c3c"
          text="white"
          space="5rem"
          bg="white"
          top="1.5rem"
        />
      </div>
    </div>
  );
}

export default TotalPriceCards;
