import React from "react";
import Mail from "./Images/call.png";
import Call from "./Images/mail.png";
import Facebook from "./Images/brandfacebook.png";
import Twitter from "./Images/Path.png";
import Insta from "./Images/brandi.png";
import Copy from "./Images/copyright.png";

const Foooter = () => {
  return (
    <section className="mx-auto max-w-[1440px]">
      {/* LARGER SCREENS */}
      <div className="hidden md:block">
        <div className="w-full bg-[#FFFFFF] px-[5rem] pt-[4rem]">
          <div>
            <div className="flex justify-between gap-5">
            <div className="text-[#201F23]">
              <h1 className="font-bold">Avart</h1>
              <p className="font-medium mt-3 max-w-[508px]">
                Avart is your webapp for creating Artificial Intelligent
                Avatars, we also offer courses on avatar generation.
              </p>
            </div>

            <div className="flex space-x-[3.5rem]">
              <div className="flex flex-col space-y-4 text-[#2B292F]">
                <p className="font-semibold text-xl">Resources</p>
                <p className="text-[#605E65]">
                  <a href="/" className="text-base">Careers</a>
                </p>
                <p className="text-[#605E65]">
                  <a href="/" className="text-base">Blogs</a>
                </p>
                <p className="text-[#605E65]">
                  <a href="/" className="text-base">Reviews</a>
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-[#2B292F]">
                <p className="font-semibold text-xl">Company</p>
                <p className="text-[#605E65]">
                  <a href="/" className="text-base">Contact Us</a>
                </p>
                <p className="text-[#605E65]">
                  <a href="/" className="text-base">About Us</a>
                </p>
                <p className="text-[#605E65]">
                  <a href="/" className="text-base">Events</a>
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-[#2B292F]">
                <p className="font-semibold text-xl">Help</p>
                <p className="text-[#605E65]">
                  <a href="/" className="text-base">Faqs</a>
                </p>
                <p className="text-[#605E65]">
                  <a href="/" className="text-base">Terms and Policy</a>
                </p>
                <p className="text-[#605E65]">
                  <a href="/" className="text-base">Contact Us</a>
                </p>
              </div>
            </div>
            </div>

            <div className="flex items-center justify-between mt-[5rem] pb-5">
              <div className="flex gap-x-[5rem] text-[#2B292F]">
                <p className="text-sm flex items-center gap-3">
                  <img src={Mail} alt="/" />
                  <a href="/"> Avart@gmail.com</a>
                </p>
                <p className="text-sm flex items-center gap-3">
                  <img src={Call} alt="/" />
                  <a href="/"> +2347012345678</a>
                </p>
              </div>
              <div className="flex items-center justify-center space-x-4 text-[#000]">
                <img src={Insta} alt="insta" className="text-[#000]" />
                <img src={Twitter} alt="twitter" />
                <img src={Facebook} alt="facebook" />
              </div>
            </div>
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
          <p className="font-bold text-[#fff]">Avart</p>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <div className="w-full bg-[#FFFFFF] px-5 py-5">
          <div className="flex flex-col">
            <div className="text-[#201F23]">
              <h1 className="font-bold">Avart</h1>
              <p className="font-medium mt-3">
                Avart is your webapp for creating Artificial Intelligent
                Avatars, we also offer courses on avatar generation.
              </p>
            </div>

            <div className="grid grid-cols-2 content-center gap-5 py-6">
              <div className="flex flex-col space-y-2 text-[#2B292F]">
                <p className="font-semibold text-xl">Resources</p>
                <p className="text-sm">
                  <a href="/">Careers</a>
                </p>
                <p className="text-sm">
                  <a href="/">Blogs</a>
                </p>
                <p className="text-sm">
                  <a href="/">Reviews</a>
                </p>
              </div>
              <div className="flex flex-col space-y-2 text-[#2B292F]">
                <p className="font-semibold text-xl">Company</p>
                <p className="text-sm">
                  <a href="/">Contact Us</a>
                </p>
                <p>
                  <a href="/">About Us</a>
                </p>
                <p className="text-sm">
                  <a href="/">Events</a>
                </p>
              </div>
              <div className="flex flex-col space-y-2 text-[#2B292F]">
                <p className="font-semibold text-xl">Help</p>
                <p className="text-sm">
                  <a href="/">Faqs</a>
                </p>
                <p className="text-sm">
                  <a href="/">Terms and Policy</a>
                </p>
                <p className="text-sm">
                  <a href="/">Contact Us</a>
                </p>
              </div>
              <div className="flex flex-col space-y-2 text-[#2B292F]">
                <p className="font-semibold text-xl">Socials</p>
                <p className="text-sm flex items-center gap-3">
                  <img src={Mail} alt="/" />
                  <a href="/"> Avart@gmail.com</a>
                </p>
                <p className="text-sm flex items-center gap-3">
                  <img src={Call} alt="/" />
                  <a href="/"> +2347012345678</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex items-center justify-center space-x-4 text-[#000] mt-3 pb-[3rem]">
          <img src={Insta} alt="insta" className="text-[#000]" />
          <img src={Twitter} alt="twitter" />
          <img src={Facebook} alt="facebook" />
        </div>
        <div className="w-full text-center bg-[#8B70E9] flex items-center justify-center gap-2 py-3 ">
          <div>
            <img
              src={Copy}
              alt="copyright"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-bold text-[#fff]">Avart</p>
        </div>
      </div>
    </section>
  );
};

export default Foooter;
