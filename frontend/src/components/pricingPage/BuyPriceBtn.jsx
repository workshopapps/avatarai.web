import React from "react";

function BuyPriceBtn({ top, background, text }) {
  return (
    <div
      style={{
        "margin-top": top,
        "background-color": background,
        color: text,
      }}
      className="w-full text-center p-2 rounded-lg">
      <button> Buy this plan</button>
    </div>
  );
}

export default BuyPriceBtn;
