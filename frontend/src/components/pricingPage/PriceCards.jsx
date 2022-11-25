import BuyPriceBtn from "./BuyPriceBtn";
import React from "react";

function PriceCards({
  title,
  amount,
  bg,
  top,
  feature,
  feature2,
  font,
  background,
  text,
}) {
  return (
    <section
      style={{ "background-color": bg, color: font }}
      className="drop-shadow-xl flex flex-col  vnc_card justify-between  font-nunito rounded-lg border-vnc_line border-first w-80 break2:w-80 lg:w-96 p-4"
    >
      <div className="py-8 vnc_cover">
        <h2 className=" md:mt-20 mb-4 text-lg">{title}</h2>
        <div className="flex py-1 gap-2 items-center">
          <h1 className="text-5xl font-bold font-jakarta">{amount}</h1>
          <p>/month</p>
        </div>
        <p className=" py-4">
          All can have random results and may include artistic nudes, erotic or
          otherwise shocking images, if you do not want that and are sensitive,
          we recommend you to NOT use the site!
        </p>
        <div>{feature}</div>
        <div>{feature2}</div>
        <hr className=" vnc_hr" />
        <div className="py-2">
          <span>4k avatars</span> 4096x4096
        </div>
        <hr className="vnc_hr" />
        <div>{feature}</div>
        <div>{feature2}</div>
      </div>
      <BuyPriceBtn background={background} text={text} />
    </section>
  );
}

export default PriceCards;
