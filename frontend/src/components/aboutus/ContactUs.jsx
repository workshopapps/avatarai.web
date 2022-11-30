import React from 'react';
import CallImg from './img/rafiki.svg';

const ContactUs = () => {
	return (
		<div className="max-w-[1200px] mx-auto flex justify-between gap-3 md:gap-5">
			<div className="max-w-[580px] py-[32px] md:py-[112px] flex flex-col justify-center items-start">
				<h1 className="text-[#ffffff] font-semibold text-[20px] md:text-[48px] lg:text-[64px] leading-[28px] md:leading-[48px] lg:leading-[64px] mb-[5px] md:mb-[16px]">
					Have a question?
					<br />
					Our team is happy to assist you
				</h1>
				<p className="mb-[16px] md:mb-[64px] text-[#BFC3D4] text-xs md:text-[24px] leading-3 md:leading-[24px] font-medium">
					Ask about Zuvatar products, pricing, implementation or anything else. Our highly trained reps are standing by,
					ready to help
				</p>

				<button className="px-[26px] py-3 md:py-[24px] outline-none normal-case border-none text-sm md:text-[28px] font-medium rounded-lg bg-[#FFFFFF] text-[#6C6191]">
					Contact Us
				</button>
			</div>
			<div className="w-full flex items-end justify-end">
				<img src={CallImg} alt="Call center man" className="w-full md:w-[80%] z-10" />
			</div>

			<div className="w-[112px] h-[112px] md:w-[444px] md:h-[444px] rounded-full bg-[#DDDAE6] p-[20px] md:p-[56px] absolute bottom-[-30px] right-[-50px] md:bottom-[-282px] md:right-[-282px] lg:bottom-[-122px] lg:right-[-122px]">
				<div className="bg-[#ffffff] w-full h-full rounded-full z-0"></div>
			</div>
		</div>
	);
};

export default ContactUs;
