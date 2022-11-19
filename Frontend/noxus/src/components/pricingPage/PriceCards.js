import BuyPriceBtn from "./BuyPriceBtn";
import React from "react";

function PriceCards({ title, amount, bg, top, font, background, text }) {
  return (
    <section
      style={{ "background-color": bg, color: font }}
      className=" flex flex-col  justify-between h-auto break1:h-card font-Nunito rounded-lg border-vnc_line border-first w-80 break2:w-80 lg:w-96 p-4">
      <div className="py-8">
        <h2 className=" break1:mt-20 mt-4 mb-2 break1:mb-5 text-lg">{title}</h2>
        <div className="flex py-1 gap-2 items-center">
          <h1 className="break1:text-5xl text-lg font-bold font-Jakarta">
            {amount}
          </h1>
          <p>/month</p>
        </div>
        <p className="py-1 break1:py-4">
          All can have random results and may include artistic nudes, erotic or
          otherwise shocking images, if you do not want that and are sensitive,
          we recommend you to NOT use the site!
        </p>
        <div className="py-2">
          <span>600 pictures</span> just for you
        </div>
        <hr className="border-1 border-vnc_hr" />
        <div className="py-2">
          <span>4k avatars</span> 4096x4096
        </div>
        <hr className="border-1 border-vnc_hr" />
        <div className="py-2">
          <span>600 pictures</span> just for you
        </div>
      </div>
      <BuyPriceBtn background={background} text={text} />
    </section>
  );
}

export default PriceCards;
