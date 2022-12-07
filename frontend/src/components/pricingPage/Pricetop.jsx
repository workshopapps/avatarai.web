import React from "react";

export default function Pricetop() {
  return (
    <>
      <div className="text-center mt-4 ">
        <h1 className=" text-5xl mx-auto md:w-4/6 font-jakarta font-bold px-3">
          Pick a <span className="text-[#4D3899]"> plan </span> and create your{" "}
          <span className="text-[#4D3899]"> AI generated Avatars </span>
        </h1>
        <p className=" md:w-[38rem] w-5/6 mb-8 mx-auto text-lg font-semibold font-nunito py-4">
          We will train the model, render your avatars and post-process them.
          We'll send you and email with a link to 100+ different AI avatars of
          your face when it's done
        </p>
      </div>
    </>
  );
}
