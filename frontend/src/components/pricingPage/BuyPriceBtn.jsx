import React from "react";
import Button from "../landingPage/Button/Button";

function BuyPriceBtn({ top, background, text }) {
  return (
		<div
			style={{
				'margin-bottom': top,
				'background-color': background,
				color: text,
			}}
			className="w-full rounded-lg mt-5"
		>
			<Button
				type="submit"
				className="font-nunito font-bold text-lg lg:text-xl p-4 w-full"
			>
				GET STARTED NOW
			</Button>
		</div>
	);
}

export default BuyPriceBtn;
