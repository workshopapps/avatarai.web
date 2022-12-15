import React from 'react';
import Facebook from './Images/brand-facebook.svg';
import Insta from './Images/brand-instagram.svg';
import Twitter from './Images/brand-twitter.svg';
import Call from './Images/phone.svg';
import Mail from './Images/mail.svg';
import Copy from './Images/copyright.svg';
import { Link } from 'react-router-dom';

const Foooter = () => {
	return (
		<section className="w-full">
			{/* LARGER SCREENS */}
			<div className="hidden md:block w-full bg-[#FFFFF]">
				<div className="flex justify-between px-5 md:px-[4rem] max-w-[1400px] mx-auto m-auto py-[2rem] ">
					<div className="flex-[45%]">
						<div className="w-[80%] md:w-[85%]">
							<h1 className="font-bold text-base text-[#201F23]">Zuvatar</h1>
							<p className="mt-3 text-[#605E65] text-sm md:text-base max-w-[508px]">
								Zuvatar is a webapp for creating artificial intelligent avatars. Our trained models are designed to
								generate perfect avatars for you.
							</p>
						</div>
					</div>
					<div className="flex-[45%]">
						<div className="">
							<div className="flex justify-between text-[#605E65]">
								<div className="flex flex-col space-y-4">
									<p className="font-semibold text-base text-[#201F23]">Resources</p>
									<p className="">
										<Link to="/" className="text-base">
											Reviews
										</Link>
									</p>
									<p className="">
										<Link to="/ApiPage" className="text-base">
											API integration
										</Link>
									</p>
								</div>
								<div className="flex flex-col space-y-4 md:ml-[1.7rem]">
									<p className="font-semibold text-base text-[#201F23]">Company</p>
									<p className="">
										<Link to="/contactus" className="text-base">
											Contact Us
										</Link>
									</p>
									<p className="">
										<Link to="/Aboutus" className="text-base">
											About Us
										</Link>
									</p>
								</div>
								<div className="flex flex-col space-y-4 md:ml-[1.7rem] lg:w-auto w-[6rem]">
									<p className="font-semibold text-base text-[#201F23]">Help</p>
									<p className="">
										<Link to="/FAQ" className="text-base">
											FAQs
										</Link>
									</p>
									<p className="">
										<Link to="/Terms" className="text-base">
											Terms
										</Link>
									</p>
								</div>
								<div className="flex flex-col space-y-4 md:ml-[1.7rem] lg:w-auto w-[6rem]">
									<p className="font-semibold text-base text-[#201F23]">Socials</p>
									<p className="">
										{/* <img src={Insta} alt="insta" className="text-[#000]" /> */}
										<Link to="/FAQ" className="text-base">
											Instagram
										</Link>
									</p>
									<p className="">
										{/* <img src={Twitter} alt="twitter" /> */}
										<Link to="/Terms" className="text-base">
											Twitter
										</Link>
									</p>
									<p className="">
										{/* <img src={Facebook} alt="facebook" /> */}
										<Link to="/Terms" className="text-base">
											Facebook
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-between  bg-[#FFFFF] px-5 md:px-[4rem] max-w-[1400px] mx-auto py-[1.5rem]  bg-[#FFFFFF]">
					<div className="flex gap-x-[5rem] text-base">
						<p className="flex items-center gap-3">
							<img src={Mail} alt="/" />

							<a className="text-base text-[#2B292F]" href="mailto:zuvatar@gmail.com">
								zuvatar@gmail.com
							</a>
						</p>
						<p className="flex items-center gap-3">
							<img src={Call} alt="/" />
							<a className="text-base text-[#2B292F]" href="tel:+2347012345678">
								+2347012345678
							</a>
						</p>
					</div>
					{/* <div className="flex items-center justify-center space-x-4 text-[#000]">
                <img src={Insta} alt="insta" className="text-[#000]" />
                <img src={Twitter} alt="twitter" />
                <img src={Facebook} alt="facebook" />
              </div> */}
				</div>
				<div className="w-full text-center bg-[#8B70E9] flex items-center justify-center gap-2 py-3 ">
					<div>
						<img src={Copy} alt="copyright" className="w-full h-full object-cover" />
					</div>
					<p className="font-bold text-[#fff]">Zuvatar</p>
				</div>
			</div>

			{/* MOBILE */}
			<div className="md:hidden">
				<div className="w-full bg-[#FFFFFF] px-5 py-5">
					<div className="flex flex-col">
						<div className="">
							<h1 className="font-bold text-[#201F23]">Zuvatar</h1>
							<p className="mt-3 text-[#605E65] text-sm md:text-base">
								Zuvatar is a webapp for creating Artificial Intelligent Avatars. Our trained models are designed to
								generate perfect avatars for you.
							</p>
						</div>

						<div className="grid grid-cols-2 content-center gap-5 py-6 text-[#605E65]">
							<div className="flex flex-col space-y-2 ">
								<p className="font-semibold text-base text-[#201F23]">Resources</p>
								<p className="">
									<Link to="/">Reviews</Link>
								</p>
								<p className="">
									<Link to="/ApiPage">API integration</Link>
								</p>
							</div>
							<div className="flex flex-col space-y-2 ml-[-1rem] md:ml-0">
								<p className="font-semibold text-base text-[#201F23]">Company</p>
								<p className="">
									<Link to="/contactus">Contact Us</Link>
								</p>
								<p>
									<Link to="/Aboutus">About Us</Link>
								</p>
							</div>
							<div className="flex flex-col space-y-2">
								<p className="font-semibold text-base text-[#201F23]">Help</p>
								<p className="">
									<Link to="/FAQ">FAQs</Link>
								</p>
								<p className="">
									<Link to="/Terms" className="">
										Terms
									</Link>
								</p>
							</div>
							<div className="flex flex-col space-y-2 ml-[-1rem] md:ml-0">
								<p className="font-semibold text-base text-[#201F23]">Socials</p>
								<p className="">
									{/* <img src={Mail} alt="/" /> */}
									<a to="mailto:zuvatar@gmail.com">zuvatar@gmail.com</a>
								</p>
								<p className="">
									{/* <img src={Call} alt="/" /> */}
									<a to="tel:+2347012345678"> +2347012345678</a>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center mt-3 border-t-[0.5px] border-[#35343a7f] py-4">
					<img src={Insta} alt="insta" className="mx-[1rem]" />
					<img src={Twitter} alt="twitter" className="mx-[1rem]" />
					<img src={Facebook} alt="facebook" className="mx-[1rem]" />
				</div>
				<div className="w-full text-center bg-[#8B70E9] flex items-center justify-center gap-2 py-3 ">
					<div>
						<img src={Copy} alt="copyright" className="w-full h-full object-cover" />
					</div>
					<p className="font-bold text-[#fff]">Zuvatar</p>
				</div>
			</div>
		</section>
	);
};

export default Foooter;
