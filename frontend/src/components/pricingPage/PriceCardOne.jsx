import BuyPriceBtn from './BuyPriceBtn';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PriceCardOne({ title, amount, bg, top, font, background, text, duration, setDetails }) {
	const handleClick = () => {
		setDetails({
			title,
			amount,
			duration,
		});
	};
	return (
		<section
			style={{ backgroundColor: bg, color: font }}
			className="drop-shadow-xl flex flex-col  vnc_card justify-between  font-nunito rounded-lg border-vnc_line border-first w-100 break2:w-80 lg:w-96 p-4 mt-7 mb-7 text-[#333333]"
		>
			<div className="vnc_cover">
				<h2 className=" md:mt-8 mb-4 text-lg">{title}</h2>
				<div className="flex py-1 gap-2 items-center mb-5">
					<h1 className="text-3xl md:text-5xl font-bold font-jakarta">${amount}</h1>
					<p>/{duration}</p>
				</div>
				{/* <p className=" py-4">
          All can have random results and may include artistic nudes, erotic or
          otherwise shocking images, if you do not want that and are sensitive,
          we recommend you to NOT use the site!
        </p> */}
				<div className="text-base md:text-lg">
					<p className="my-2">Create up to 10 different digital characters daily</p>
					<hr className=" vnc_hr" />
					<p className="my-2">Choose from 200+ outfits, 100+ shoes, 100+ accessories</p>
					<hr className=" vnc_hr" />
					<p className="my-2">Access to View different activities on the web app</p> <hr className=" vnc_hr" />
					<p className="my-2">Limited access to share generated avatars directly from the web app to other platforms</p>
				</div>
			</div>
			<div onClick={handleClick}>
				<BuyPriceBtn top={top} background={background} text={text} />
			</div>
		</section>
	);
}

export default PriceCardOne;
