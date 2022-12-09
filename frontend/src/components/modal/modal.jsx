import { useEffect } from "react";
import { createPortal } from "react-dom";

import style from "./modal.module.css"

import close from "./close.svg";

export default function Modal({ header, HeaderImg,headerStyle, text, textStyle, Image, setShow }) {


  return createPortal(
    <section className="w-full h-full fixed 
    top-0 left-0 grid place-items-center bg-[#3338] border-box"
    onClick={()=>setShow(false)}>
      <div className="w-[90vw] max-w-[460px]  rounded-lg relative bg-white min-h-[200px] flex flex-col items-center justify-center p-[30px] pb-[36px]" 
      onClick={(e)=>e.stopPropagation()}>
      
        <img
          src={close}
          className="w-[25px] h-[25px] absolute right-[8px] top-[8px]"
          onClick={() => setShow(false)}
          />
        <h3 className= {`font-nunito text-center text-[22px] font-[600] m-[15px] ${headerStyle}`}>
          {HeaderImg&&<HeaderImg/>}
          <span className="w-[5px]">{' '}</span>
          {header}</h3>
        {Image?<Image />:null}
        <p className={`font-nunito text-[16px] font-[400] w-[90%] m-[10px] text-center ${textStyle}`}
        >{text}</p>
      </div>
    </section>,
    document.getElementById("modal")
  );
}
