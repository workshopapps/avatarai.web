import React from "react";
import { useState } from "react";
import Button from "../landingPage/Button/Button";

function PriceButton() {
  const [toggle, setToggle] = useState(true);
  const myToggler = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <div
      onClick={myToggler}
      className="mx-auto border-1 rounded-lg mb-8 vnc_price  text-center mt-6 w-fit p-1"
    >
      <Button
        className={
          toggle
            ? "py-2 px-10 text-white vnc_btn1 rounded-lg"
            : "py-2 px-10 vnc_text"
        }
      >
        Monthly
      </Button>
      <Button
        className={
          toggle
            ? "py-2 px-10 vnc_text"
            : "py-2 px-10 text-white vnc_btn1 rounded-lg"
        }
      >
        Yearly
      </Button>
    </div>
  );
}

export default PriceButton;
