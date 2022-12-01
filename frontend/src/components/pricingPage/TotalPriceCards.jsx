import { Feature } from "./Feature";
import PriceCardTwo from "./PriceCardTwo";
import PriceCards from "./PriceCards";
import React from "react";

function TotalPriceCards() {
  return (
    <div className=" relative mt-10 mb-10 ">
      <div className="absolute lg:block hidden z-10 text-vnc_btn  -top-3 left-0 right-0 text-center">
        <p className="vnc_popular p-2 uppercase text-[#4D3899] font-bold rounded-lg w-fit mx-auto">
          Most Popular
        </p>
      </div>
      <div className="flex vnc_cap align-top justify-center items-top px-4 mt-4 gap-1 lg:gap-3">
        <PriceCards
          title="Basic"
          amount="$14"
          background="#4D3899"
          text="white"
          feature={<Feature />}
          space="5rem"
          bg="white"
          top="1.5rem"
        />
        <PriceCardTwo
          title="Standard"
          amount="$23"
          top="1.5rem"
          background="white"
          text="#4D3899"
          bg="#4D3899"
          font="white"
          feature={<Feature color="white" />}
          feature2={<Feature color="white" />}
        />

        <PriceCards
          title="Premium"
          amount="$42"
          background="#4D3899"
          text="white"
          space="5rem"
          bg="white"
          top="1.5rem"
          feature={<Feature />}
        />
      </div>
    </div>
  );
}

export default TotalPriceCards;
