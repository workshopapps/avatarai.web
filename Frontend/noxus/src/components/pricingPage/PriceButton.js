import React from "react";

function PriceButton() {
  return (
    <div className="mx-auto border-1 rounded-lg mb-8 bg-vnc_btn_bg  text-center mt-6 w-fit p-1">
      <button className="py-2 px-6 text-vnc_white bg-vnc_btn rounded-lg">
        Monthly
      </button>
      <button className="py-2 px-6 text-vnc_text">Yearly</button>
    </div>
  );
}

export default PriceButton;
