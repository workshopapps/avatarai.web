import { useEffect } from "react";
import { createPortal } from "react-dom";

import style from "./modal.module.css"

import close from "./close.svg";

export default function Modal({ header, text, Image, setShow }) {

  useEffect(()=>{
    let  body = document.getElementById('body')
    body.style.overflow = 'hidden'
    return ()=> body.style.overflow = 'auto'
  }, [])
  return createPortal(
    <section className="absolute left-0 grid place-items-center w-full h-full bg-[#3333] ">
      <div className="w-[90vw] md:w-[460px] ld:w-[550px] p-[10px] md:p-[20px] relative bg-white">
        <img
          src={close}
          className="w-[25px] h-[25px] absolute right-[8px] top-[8px]"
          onClick={() => setShow(false)}
        />
        <h3 className="text-center">{header}</h3>
        {Image && <Image />}
        <p>{text}</p>
      </div>
    </section>,
    document.getElementById("modal")
  );
}
