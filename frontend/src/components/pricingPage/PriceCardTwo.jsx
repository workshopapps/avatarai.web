import BuyPriceBtn from "./BuyPriceBtn";
import React from "react";

export default function PriceCardTwo({
  title,
  amount,
  bg,
  feature,
  feature2,
  font,
  background,
  text,
}) {
  return (
    <section
      style={{ "background-color": bg, color: font }}
      className=" flex flex-col  justify-between vnc_card font-Nunito rounded-lg border-vnc_line border-first w-80 break2:w-80 lg:w-96 p-4">
      <div className="py-7 text-white">
        <h2 className=" md:mt-2 mb-5 text-lg">{title}</h2>
        <div className="flex py-1 gap-2 items-center">
          <h1 className="text-5xl font-bold font-Jakarta">{amount}</h1>
          <p>/month</p>
        </div>
        <p className="py-4">
          All can have random results and may include artistic nudes, erotic or
          otherwise shocking images, if you do not want that and are sensitive,
          we recommend you to NOT use the site!
        </p>
        <div>{feature}</div>
        <div>{feature2}</div>
        <hr className="border-1 vnc_hr" />
        <div className="py-2">
          <span>4k avatars</span> 4096x4096
        </div>
        <hr className="border-1 vnc_hr" />
        <div>{feature}</div>
        <div>{feature2}</div>
      </div>
      <BuyPriceBtn background={background} text={text} />
    </section>
  );
}
