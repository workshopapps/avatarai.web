import React from "react";

function PriceButton() {
  return (
    <div className="mx-auto border-1 rounded-lg mb-8 vnc_price  text-center mt-6 w-fit p-1">
      <button className="py-3 px-8 text-white vnc_btn1 rounded-lg">
        Monthly
      </button>
      <button className="py-3 px-8 vnc_text">Yearly</button>
    </div>
  );
}

export default PriceButton;
