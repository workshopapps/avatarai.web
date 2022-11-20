import PriceButton from "./PriceButton";
import React from "react";

export default function Pricetop() {
  return (
    <>
      <div className="text-center mt-8 ">

        <h3 className="vnc_pricing font-nunito text-sm px-6 font-Nunito text-vnc_green text">
          CHECK OUT PRICING PLANS
        </h3>

        <h1 className=" p-8 text-4xl font-jakarta font-bold">
          Pick a plan and create your AI generated Avatars
        </h1>
        <p className="w-5/6 w-46rem mb-8 mx-auto text-sm font-nunito py-4">

          We will train the model, render your avatars and post-process them.
          We'll send you and email with a link to 100+ different AI avatars of
          your face when it's done
        </p>
      </div>
      <PriceButton />
    </>
  );
}
