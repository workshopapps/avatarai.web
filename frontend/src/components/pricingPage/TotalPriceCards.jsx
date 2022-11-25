import { Feature } from "./Feature";
import PriceCardTwo from "./PriceCardTwo";
import PriceCards from "./PriceCards";
import React from "react";

function TotalPriceCards() {
  return (
    <div className=" relative mt-10 ">
      <div className="absolute lg:block hidden z-10 text-vnc_btn  -top-3 left-0 right-0 text-center">
        <p className="vnc_popular p-2  rounded-lg w-fit mx-auto">
          Most Popular
        </p>
      </div>
      <div className="flex vnc_cap align-top justify-center items-top px-4 mt-4 gap-1 lg:gap-3">
        <PriceCards
          title="Basic"
          amount="$14"
          background="rgba(77, 56, 153, 1)"
          text="white"
          feature={<Feature />}
          space="5rem"
          bg="white"
        />
        <PriceCardTwo
          title="Standard"
          amount="$23"
          top="0"
          background="white"
          text="rgba(77, 56, 153, 1)"
          bg="rgba(77, 56, 153, 1)"
          font="white"
          feature={<Feature color="white" />}
          feature2={<Feature color="white" />}
        />

        <PriceCards
          title="Premium"
          amount="$42"
          background="rgba(77, 56, 153, 1)"
          text="white"
          space="5rem"
          bg="white"
          feature={<Feature />}
        />
      </div>
    </div>
  );
}

export default TotalPriceCards;
