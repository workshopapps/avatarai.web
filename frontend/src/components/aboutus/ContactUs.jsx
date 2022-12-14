import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../landingPage/Button/Button';
import ContactIllus from './img/rafiki.svg';

const ContactUs = () => {
	return (
		<div className="max-w-[1200px] mx-auto flex justify-between gap-3 md:gap-5">
			<div className="max-w-[580px] py-[32px] md:py-[112px] flex flex-col justify-center items-start">
				<h1 className="text-[#ffffff] font-semibold text-[20px] md:text-[48px] lg:text-[64px] leading-[28px] md:leading-[48px] lg:leading-[70px] mb-[5px] md:mb-[16px]">
					Have a question?
					<br />
					Our team is happy to assist you
				</h1>
				<p className="mb-[16px] md:mb-[64px] text-[#d0d0d0] text-xs md:text-[24px] leading-[16px] md:leading-[33px] font-medium ">
					Ask about Zuvatar products, pricing, implementation or anything else. Our highly trained reps are standing by,
					ready to help
				</p>

				<Button className="px-[26px] py-3 md:py-[24px] outline-none normal-case border-none text-sm md:text-[28px] rounded-lg bg-[#FFFFFF] text-[#8B70E9]">
					<Link to="/contactus" className='font-semibold'>Contact Us</Link>
				</Button>
			</div>
			<div className="w-full flex items-end justify-end">
				<img src={ContactIllus} alt="Call center man" className="w-full md:w-[80%] z-10" />
			</div>

			<div className="w-[112px] h-[112px] md:w-[444px] md:h-[444px] rounded-full bg-[#DDDAE6] p-[20px] md:p-[56px] absolute bottom-[-30px] right-[-50px] md:bottom-[-282px] md:right-[-282px] lg:bottom-[-122px] lg:right-[-122px]">
				<div className="bg-[#ffffff] w-full h-full rounded-full z-0"></div>
			</div>
		</div>
	);
};

export default ContactUs;
