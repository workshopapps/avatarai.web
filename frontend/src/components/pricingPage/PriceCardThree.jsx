import BuyPriceBtn from "./BuyPriceBtn";
import React from "react";

function PriceCardThree({
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
      className="drop-shadow-xl flex flex-col  vnc_card justify-between  font-nunito rounded-lg border-vnc_line border-first w-100 break2:w-80 lg:w-96 p-4 mt-7 mb-7"
    >
      <div className="py-8 vnc_cover">
        <h2 className=" md:mt-20 mb-4 text-lg">{title}</h2>
        <div className="flex py-1 gap-2 items-center">
          <h1 className="text-5xl font-bold font-jakarta">{amount}</h1>
          <p>/month</p>
        </div>
        {/* <p className=" py-4">
          All can have random results and may include artistic nudes, erotic or
          otherwise shocking images, if you do not want that and are sensitive,
          we recommend you to NOT use the site!
        </p> */}
        <ul className="text-lg">
          <li className="list-item">
            Create unlimited number of digital characters daily
          </li>
          <hr className=" vnc_hr" />
          <li className="list-item">
            Unlimited access to change the avatar's hair, cloth, or skin color
          </li>{" "}
          <hr className=" vnc_hr" />
          <li className="list-item">
            Create high resolution characters, cartoons and anime profile photos
            up to 10 times daily
          </li>
          <hr className=" vnc_hr" />
          <li className="list-item">
            Access to unlimited specially designed avatars through referrals
          </li>{" "}
          <hr className=" vnc_hr" />
          <li className="list-item">
            Access to save or export the AI-generated avatars in a JPG or PNG
            format at any time
          </li>{" "}
          <hr className=" vnc_hr" />
          <li className="list-item">
            Unlimited access to share generated avatars directly from the web
            app to other platforms
          </li>
        </ul>

        {/* <div className="py-2">
          <span>4k avatars are</span> 4096x4096
        </div> */}
      </div>
      <BuyPriceBtn top={top} background={background} text={text} />
    </section>
  );
}

export default PriceCardThree;
