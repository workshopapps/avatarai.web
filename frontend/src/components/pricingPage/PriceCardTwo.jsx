import BuyPriceBtn from "./BuyPriceBtn";
import React from "react";

export default function PriceCardTwo({
  title,
  amount,
  top,
  bg,
  feature,
  feature2,
  font,
  background,
  text,
  duration,
}) {
  return (
    <section
      style={{ "background-color": bg, color: font }}
      className="drop-shadow-xl flex flex-col  justify-between vnc_card font-nunito rounded-lg border-vnc_line border-first w-100 break2:w-80 lg:w-96 p-4"
    >
      <div className="py-7 text-white">
        <h2 className=" md:mt-2 text-white mb-5 text-lg">{title}</h2>
        <div className="flex py-1 text-white gap-2 items-center">
          <h1 className="text-5xl font-bold text-white font-jakarta">
            {amount}
          </h1>
          <p className="text-white">{duration}</p>
        </div>

        <div>
          <p className="text-white text-lg my-3">
            Create up to 50 digital characters daily
          </p>{" "}
          <hr className=" vnc_hr" />
          <p className="text-white text-lg my-2">
            Change the avatar's hair, cloth, or skin color up to 50 times daily
          </p>
          <hr className=" vnc_hr" />
          <p className="text-white text-lg my-2">
            Choose from 300+ outfits, 200+ shoes, 200+ accessories
          </p>
          <hr className=" vnc_hr" />
          <p className="text-white text-lg my-2">
            Create high resolution characters, cartoons and anime profile photos
            up to 3 times daily
          </p>{" "}
          <hr className=" vnc_hr" />
          <p className="text-white text-lg my-2">
            Save or export the AI-generated avatars in a JPG or PNG format up to
            five times daily
          </p>
          <hr className=" vnc_hr" />
          <p className="text-white text-lg my-2">
            Unlimited access to share generated avatars directly from the web
            app to other platforms
          </p>
        </div>

        {/* <div className="py-2 text-white">
          <span className="text-white">4k avatars are </span> 4096x4096
        </div> */}
      </div>
      <BuyPriceBtn top={top} background={background} text={text} />
    </section>
  );
}
