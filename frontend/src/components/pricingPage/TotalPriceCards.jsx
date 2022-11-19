import { Feature } from "./Feature";
import PriceCardTwo from "./PriceCardTwo";
import PriceCards from "./PriceCards";
import React from "react";

function TotalPriceCards() {
  return (
    <div className=" relative mt-10 ">
      <div className="absolute md:block hidden text-vnc_btn  -top-3 left-0 right-0 text-center">
        <p className="bg-vnc_popular p-2 rounded-lg w-fit mx-auto">
          Most Popular
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-3">
        <PriceCards
          title="Basic"
          amount="$14"
          background="rgba(77, 56, 153, 1)"
          text="white"
          feature=<Feature />
          space="5rem"
        />
        <PriceCardTwo
          title="Standard"
          amount="$23"
          top="0"
          background="white"
          text="rgba(77, 56, 153, 1)"
          bg="rgba(77, 56, 153, 1)"
          font="white"
          feature=<Feature />
          feature2=<Feature />
        />

        <PriceCards
          title="Premium"
          amount="$42"
          background="rgba(77, 56, 153, 1)"
          text="white"
          space="5rem"
          feature=<Feature />
        />
      </div>
    </div>
  );
}

export default TotalPriceCards;
