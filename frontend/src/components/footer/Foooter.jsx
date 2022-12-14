import React from "react";
import Facebook from "./Images/brand-facebook.svg";
import Insta from "./Images/brand-instagram.svg";
import Twitter from "./Images/brand-twitter.svg";
import Call from "./Images/phone.svg";
import Mail from "./Images/mail.svg";
import Copy from "./Images/copyright.svg";

const Foooter = () => {
  return (
    <section>
      {/* LARGER SCREENS */}
      <div className="hidden md:block">
      <div
      className="
      flex    justify-between  bg-[#FFFFF] w-[80%] md:[90%] m-auto py-[3.5rem] ">
        <div className="flex-[45%]">

        <div className="text-[#201F23] w-[80%] md:w-[85%]">
              <h1 className="font-bold">Zuvatar</h1>
              <p className="font-medium mt-3 max-w-[508px]">
               Zuvatar is a webapp for creating Artificial
Intelligent Avatars. Our trained models are
designed to generate perfect avatars for you.

              </p>
            </div>
        </div>
        <div className="lg:flex-[20%] md:flex-[0%]"></div>
            <div className="flex-[55%]">
             <div className=" ">

            <div className="flex">
              <div className="flex flex-col space-y-4 text-[#2B292F] md:ml-[1.7rem]">
                <p className="font-semibold text-xl">Resources</p>
                <p className="text-[#605E65]">
                  <a href="/" className="text-base">Reviews</a>
                </p>
                <p className="text-[#605E65]">
                  <a href="/ApiPage" className="text-base">API integration</a>
                </p>
             </div>
              <div className="flex flex-col space-y-4 text-[#2B292F] md:ml-[1.7rem]">
                <p className="font-semibold text-xl">Company</p>
                <p className="text-[#605E65]">
                  <a href="/contactus" className="text-base">Contact Us</a>
                </p>
                <p className="text-[#605E65]">
                  <a href="/Aboutus" className="text-base">About Us</a>
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-[#2B292F] md:ml-[1.7rem] lg:w-auto w-[6rem]">
                <p className="font-semibold text-xl">Help</p>
                <p className="text-[#605E65]">
                  <a href="/FAQ" className="text-base">FAQs</a>
                </p>
                <p className="text-[#605E65]">
                  <a href="/Terms" className="text-base">Terms</a>
                </p>
             </div>
            </div>
             </div>
            </div>
      </div>
      <div className="flex justify-between  bg-[#FFFFF] w-[80%] md:[90%] m-auto py-[1.5rem]  bg-[#FFFFFF]">
              <div className="flex gap-x-[5rem] text-[#2B292F]">
                <p className="text-sm flex items-center gap-3">
                <img src={Call} alt="/" />
                
                  <a href="mailto:zuvatar@gmail.com"> zuvatar@gmail.com</a>
                </p>
                <p className="text-sm flex items-center gap-3">
                  
                  <img src={Mail} alt="/" />
                  <a href="tel:+2347012345678"> +2347012345678</a>
                </p>
              </div>
              <div className="flex items-center justify-center space-x-4 text-[#000]">
                <img src={Insta} alt="insta" className="text-[#000]" />
                <img src={Twitter} alt="twitter" />
                <img src={Facebook} alt="facebook" />
              </div>
            </div>
        <div className="w-full text-center bg-[#8B70E9] flex items-center justify-center gap-2 py-3 ">
          <div>
            <img
              src={Copy}
              alt="copyright"
              className="w-full h-full object-cover"
            />
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
              <p className="font-medium mt-3">
              Zuvatar is a webapp for creating Artificial
Intelligent Avatars. Our trained models are
designed to generate perfect avatars for you.
              </p>
            </div>

            <div className="grid grid-cols-2 content-center gap-5 py-6">
              <div className="flex flex-col space-y-2 text-[#2B292F]">
                <p className="font-semibold text-xl">Resources</p>
                <p className="text-sm">
                  <a href="/">Reviews</a>
                </p>
                <p className="text-sm">
                  <a href="/ApiPage">API integration</a>
                </p>
            </div>
              <div className="flex flex-col space-y-2 text-[#2B292F] ml-[-1rem] md:ml-0">
                <p className="font-semibold text-xl">Company</p>
                <p className="text-sm">
                  <a href="/contactus">Contact Us</a>
                </p>
                <p>
                  <a href="/Aboutus">About Us</a>
                </p>
           </div>
              <div className="flex flex-col space-y-2 text-[#2B292F]">
                <p className="font-semibold text-xl">Help</p>
                <p className="text-sm">
                  <a href="/FAQ">FAQs</a>
                </p>
                <p className="text-[#605E65]">
                  <a href="/Terms" className="text-base">Terms</a>
                </p>
              </div>
              <div className="flex flex-col space-y-2 text-[#2B292F] ml-[-1rem] md:ml-0">
                <p className="font-semibold text-xl">Socials</p>
                <p className="text-sm flex items-center gap-3">
                <img src={Call} alt="/" />
                  <a href="mailto:zuvatar@gmail.com">zuvatar@gmail.com</a>
                </p>
                <p className="text-sm flex items-center gap-3">
                  
                  <img src={Mail} alt="/" />
                  <a href="tel:+2347012345678"> +2347012345678</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex items-center justify-center  text-[#000] mt-3 pb-[2rem]">
          <img src={Insta} alt="insta" className="text-[#000] mx-[1rem]" />
          <img src={Twitter} alt="twitter" className="text-[#000] mx-[1rem]" />
          <img src={Facebook} alt="facebook" className="text-[#000] mx-[1rem]"/>
        </div>
        <div className="w-full text-center bg-[#8B70E9] flex items-center justify-center gap-2 py-3 ">
          <div>
            <img
              src={Copy}
              alt="copyright"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-bold text-[#fff]">Zuvatar</p>
        </div>
      </div>
    </section>
  );
};

export default Foooter;
