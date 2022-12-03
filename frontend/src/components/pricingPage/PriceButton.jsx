import React from "react";
import Button from "../landingPage/Button/Button";

function PriceButton() {
  return (
    <div className="mx-auto border-1 rounded-lg mb-8 vnc_price  text-center mt-6 w-fit p-1">
      <Button className="py-2 px-10 text-white vnc_btn1 rounded-lg">
        Monthly
      </Button>
      <Button className="py-2 px-10 vnc_text">Yearly</Button>
    </div>
  );
}

export default PriceButton;
