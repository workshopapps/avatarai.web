import React from "react";
import Facebook from "./Images/brandfacebook.png";
import Instagram from "./Images/igvec2.png";
import Twitter from "./Images/Path.png";
import call from "./Images/call.png";
import mail from "./Images/mail.png";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="text-center lg:text-left bg-gray-100 text-gray-600 w-[100vw]">
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="">
                <h6 className="font-bold mb-4 text-[#2B292F]">
                  <img className="w-4 mr-3"></img>
                  Noxus
                </h6>
                <p>
                  Noxus is your webapp for creating Artificial Intelligent
                  Avatars. We also offer courses on Avatar generation.
                </p>
              </div>
              <div className="lg:ml-20">
                <h6 className=" font-bold mb-4 flex justify-center md:justify-start text-[20px] text-[#2B292F]">
                  Resources
                </h6>
                <p className="mb-4 ">
                  <a href="#!" class="text-gray-600 text-[16px]">
                    Careers
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" class="text-gray-600 text-[16px]">
                    Blog
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600 text-[16px]">
                    Reviews
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-gray-600 text-[16px]">
                    API integration
                  </a>
                </p>
              </div>
              <div className="">
                <h6 className="font-bold mb-4 flex justify-center md:justify-start text-[20px] text-[#2B292F]">
                  Company
                </h6>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600 text-[16px]">
                    Contact Us
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600 text-[16px]">
                    About Us
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" class="text-gray-600 text-[16px]">
                    Events
                  </a>
                </p>
              </div>
              <div className="">
                <h6 class=" font-bold mb-4 flex justify-center md:justify-start text-[20px] text-[#2B292F]">
                  Help
                </h6>
                <p className="flex items-center justify-center md:justify-start mb-4 text-[16px]">
                  FAQs
                </p>
                <p className="flex items-center justify-center md:justify-start mb-4 text-[16px]">
                  Terms & Privacy
                </p>
                <p className="flex items-center justify-center md:justify-start mb-4 text-[16px]">
                  Contact Us
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mb-4 mr-12 lg:flex  ">
            <div className="flex mr-5">
              <img src={mail}></img>
              <span>Noxus@gmail.com</span>
            </div>
            <div className="flex">
              <img className="" src={call}></img>
              <span>+2347012345678</span>
            </div>
          </div>
          <div className="flex justify-center">
            <a className="mr-6" href="#">
              <img className="" src={Facebook}></img>
            </a>
            <a className="mr-6" href="#">
              <img className="" src={Instagram}></img>
            </a>
            <a className="mr-6" href="#">
              <img className="" src={Twitter}></img>
            </a>
          </div>
        </div>

        <div className="text-center p-6 bg-gray-200">
          <span>© 2021 Noxus</span>
        </div>
      </footer>
    </>
  );
}
