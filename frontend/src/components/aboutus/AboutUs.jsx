import TeamMemberCard from "./TeamMemberCard";
import "./aboutUs.css";
import Navbar from "../landingPage/Navbar/Navbar";
import { TEAM } from "./data";
// import Footer from "../Footerpage/Footer";
import Foooter from "../footer/Foooter";
import ContactUs from "./ContactUs";
import FaqNewsletter from "../faq/FaqNewsletter";
import { useContext } from "react";
import { useEffect } from "react";
import { NavContext, pages } from "../../../context/nav-context";
const AboutUs = () => {
  const { setPage } = useContext(NavContext);

  useEffect(() => {
    setPage(pages.AboutUs);
  }, []);

  return (
    <>
      <Navbar />
      <div id="dja_main text-[#333333]">
        <section className="dja_banner_section">
          <div className="dja_container">
            <div className="dja_banner_img">
              <img
                src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670933626/aboutBg_cfvrvy_11zon_zcye8p.webp"
                alt="AvatarAI"
              />
            </div>
            <div id="banner_title">
              <h1 className="font-bold text-[24px] md:text-[72px]">
                About <span className="text-[#8B70E9]">Us</span>
              </h1>
            </div>
          </div>
          <div className="dja_overlay"></div>
        </section>

        <section className="py-3 lg:py-[48px] px-5 relative overflow-clip">
          <div className="flex justify-between items-start gap-3 md:gap-5 max-w-[1200px] mx-auto ">
            <div className="flex-auto w-56 md:w-64 flex h-full">
              <h2 className="text-[#333333] font-semibold text-[20px] lg:text-[64px] leading-[20px] lg:leading-[81px]">
                We are on a mission to change{" "}
                <span className="text-[#808080]">
                  the face of art creation.
                </span>
              </h2>
            </div>

            <div className="flex-auto w-44 md:w-32 flex items-end h-full md:mt-[2rem]">
              <p className="font-normal flex flex-col items-center mt-[40px] lg:mt-[80px]">
                <span className="text-[#808080] text-[48px] md:text-[64px] leading-[0px]">
                  “
                </span>
                <span className="text-[10px] lg:text-[24px] font-normal">
                  Having known that AI Art has been a thing for years, the team
                  thought "maybe we can create a software that can generate
                  avatars of people in different environments.
                </span>
                <span className="text-[#808080] text-[48px] md:text-[64px] leading-4 mt-7">
                  ”
                </span>
              </p>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670062331/pattern3_ttm6gz.png"
            alt="pattern"
            className="absolute md:top-[-160px] top-[-80px] right-0 w-20 md:w-auto"
          />
          <img
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670062331/pattern2_olfm3o.png"
            alt="pattern"
            className="absolute md:top-[-100px] top-[-80px] left-0 w-20 md:w-auto"
          />
        </section>

        <div className="w-full">
          <img
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670935004/image1_woebre_11zon_wjvsqf.webp"
            alt="Large banner max-h-[1080px]"
            className="w-full"
          />
        </div>

        <section className="pt-10 lg:pt-[48px] px-5 relative overflow-clip">
          <div className=" flex justify-between gap-3 md:gap-5 max-w-[1200px] mx-auto border-b border-[#808080] pb-[2em] lg:pb-[6rem]">
            <div className="flex-auto max-w-[413px] mt-[3rem] md:mt-[7rem] flex items-end h-full">
              <p className="font-normal flex flex-col items-center">
                <span className="text-[#808080] text-[48px] md:text-[64px] leading-[0px]">
                  “
                </span>
                <span className="text-[10px] lg:text-[24px] font-normal">
                  With Zuvatar, users get to create avatars and protect their
                  physical identity on any social platform and maintain
                  anonymity in a virtual world.
                </span>
                <span className="text-[#808080] text-[48px] md:text-[64px] leading-4 mt-7">
                  ”
                </span>
              </p>
            </div>

            <div className="flex-auto md:w-64 flex h-full">
              <h2 className="text-[#333333] font-semibold text-[16px] lg:text-[64px] leading-[16px] lg:leading-[81px]">
                "Art privacy is crucial, and{" "}
                <span className="text-[#808080]">Zuvatar</span> is making it{" "}
                <span className="text-[#808080]">possible</span>" -{" "}
                <span className="text-[#808080]">Team Tape</span>.
              </h2>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670062331/pattern3_ttm6gz.png"
            alt="pattern"
            className="absolute md:top-[-160px] top-[-80px] right-0 w-20 md:w-auto"
          />
          <img
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670062331/pattern2_olfm3o.png"
            alt="pattern"
            className="absolute md:top-[-100px] top-[-80px] left-0 w-20 md:w-auto"
          />
        </section>

        <section className="px-5 mt-[3rem] lg:mt-[6rem] relative">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-bold text-center text-[24px] md:text-[48px] mb-3 md:mb-[24px]">
              Meet our Amazing Team
            </h2>
            <p className="text-sm text-center md:text-[20px] mb-[48px] md:leading-[35px]">
              Zuvatar was founded by a team of creatives in November 2022 during
              the most powerful internship in the world (HNG). What brought the
              team together was a spark of ideas, and an idea to help online
              users to have enough physical privacy on any online forum.
            </p>
            <div className="dja_team_ctn">
              {TEAM.map((item, i) => (
                <TeamMemberCard index={i} profile={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#8B70E9] mt-[50px] relative overflow-hidden px-5">
          <ContactUs />
        </section>
      </div>
      <FaqNewsletter />
      {/* <Footer /> */}
      <Foooter />
    </>
  );
};

export default AboutUs;
