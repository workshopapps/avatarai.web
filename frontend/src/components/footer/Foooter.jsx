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
    <section>
      {/* LARGER SCREENS */}
      <div className="hidden md:block">
      <div
      className="
      flex    justify-between  bg-[#FFFFF] px-[4rem] md:[90%] m-auto py-[3.5rem] ">
        <div className="lg:flex-[40.5%] md:flex-[60%]">

        <div className="text-[#201F23] w-[80%] md:w-[93%]">
              <h1 className="font-bold text-xl">Zuvatar</h1>
              <p className="font-medium mt-3 text-[#605E65] w-full lg:text-[1.1rem] md:text-[1rem]">
               Zuvatar is a webapp for creating artificial
               intelligent avatars. Our trained models are
                designed to generate perfect avatars for you.

              </p>
            </div>
        </div>
        {/* <div className="lg:flex-[15%] md:flex-[0%]"></div> */}
            <div className="lg:flex-[44.5%] md:flex-[40%]">
             <div className=" ">

            <div className="flex justify-between">
              <div className="flex flex-col space-y-4 text-[#2B292F] lg:ml-[1.7rem] md:ml-[0.6rem]">
                <p className="font-semibold text-xl">Resources</p>
                <p className="text-[#605E65]">
                  <a href="/" className="text-base hover:text-[#8b70e9]">Reviews</a>
                </p>
                <p className="text-[#605E65]">
                  <a href="/ApiPage" className="text-base hover:text-[#8b70e9]">API integration</a>
                </p>
             </div>
              <div className="flex flex-col space-y-4 text-[#2B292F] lg:ml-[1.7rem] md:ml-[0.6rem]">
                <p className="font-semibold text-xl">Company</p>
                <p className="text-[#605E65]">
                  <a href="/contactus" className="text-base hover:text-[#8b70e9]">Contact Us</a>
                </p>
                <p className="text-[#605E65]">
                  <a href="/Aboutus" className="text-base hover:text-[#8b70e9]">About Us</a>
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-[#2B292F] lg:ml-[1.7rem] md:ml-[1rem] lg:w-auto w-[6rem]">
                <p className="font-semibold text-xl">Help</p>
                <p className="text-[#605E65]">
                  <a href="/FAQ" className="text-base hover:text-[#8b70e9]">FAQs</a>
                </p>
                <p className="text-[#605E65]">
                  <a href="/Terms" className="text-base hover:text-[#8b70e9]">Terms</a>
                </p>
             </div>
             <div className="flex flex-col space-y-4 text-[#2B292F] lg:ml-[1.7rem] md:ml-[0.6rem] lg:w-auto w-[6rem]">
                <p className="font-semibold text-xl">Socials</p>
                <p className="text-[#605E65] flex gap-3 items-center">
                {/* <img src={Insta} alt="insta" className="text-[#000]" /> */}
                  <a href="/FAQ" className="text-base hover:text-[#8b70e9]">Instagram</a>
                </p>
                <p className="text-[#605E65] gap-3 items-center flex">
                {/* <img src={Twitter} alt="twitter" /> */}
                  <a href="/Terms" className="text-base hover:text-[#8b70e9] ">Twitter</a>
                </p>
                <p className="text-[#605E65] gap-3 items-center flex" >
                {/* <img src={Facebook} alt="facebook" /> */}
                  <a href="/Terms" className="text-base hover:text-[#8b70e9]">Facebook</a>
                </p>
             </div>
            </div>
             </div>
            </div>
      </div>
      <div className="flex justify-between  bg-[#FFFFF] px-[4rem] md:[90%] m-auto py-[1.5rem]  bg-[#FFFFFF]">
              <div className="flex gap-x-[5rem] text-[#2B292F]">
                <p className="text-sm flex items-center gap-3">
                <img src={Mail} alt="/" />
                
                  <a className="text-md mail" href="mailto:zuvatar@gmail.com"> zuvatar@gmail.com</a>
                </p>
                <p className="text-sm flex items-center gap-3">
                    <img src={Call} alt="/" />
                  <a className="text-md num" href="tel:+2347012345678"> +2347012345678</a>
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
            <div className="text-[#201F23]">
              <h1 className="font-bold">Zuvatar</h1>
              <p className="font-medium mt-3 text-[14px]">
              Zuvatar is a webapp for creating Artificial
Intelligent Avatars. Our trained models are
designed to generate perfect avatars for you.
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
