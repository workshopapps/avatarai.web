import WhyUsCard from "./WhyUsCard";
import TeamMemberCard from "./TeamMemberCard";
import "./aboutUs.css";
import Banner from "./img/aboutBg.png";
import PolygonLeft from "./img/polygonLeft.png";
import PolygonRight from "./img/polygonRight.png";
import Navbar from "../landingPage/Navbar/Navbar";

import { WHY_US, TEAM } from "./data";
// import Footer from "../Footerpage/Footer";
import Foooter from "../footer/Foooter";

const AboutUs = () => {
  return (
		<>
			<Navbar />
			<div id="dja_main text-[#333333]">
				<section className="dja_banner_section">
					<div className="dja_container">
						<div className="dja_banner_img">
							<img src={Banner} alt="AvatarAI" />
						</div>
						<div id="banner_title">
							<h1 className="font-bold">
								About <span className="text-[#B5B0C8]">Us</span>
							</h1>
						</div>
					</div>
					<div className="dja_overlay"></div>
				</section>

				<section className="py-[48px]">
					<div className="flex justify-between gap-4 lg:gap-5 max-w-[1200px] mx-auto">
						<h2 className="text-[#333333] font-semibold text-[40px] lg:text-[64px] lg:leading-[81px] max-w[611px]">
							We are on a mission to change <span className="text-[#808080]">the face of art creation.</span>
						</h2>
						<p className="font-normal flex flex-col items-center max-w-[518px] mt-[40px] lg:mt-[80px]">
							<span className="text-[#808080] text-[48px] md:text-[64px] leading-[0px]">“</span>
							<span className="text-[14px] lg:text-[24px] font-normal">
								Having known that AI Art has been a thing for years, the team thought "maybe we can create a software
								that can generate avatars of people in different environments.
							</span>
							<span className="text-[#808080] text-[48px] md:text-[64px] leading-4 mt-7">”</span>
						</p>
					</div>
				</section>

				<section className="dja_story_section">
					<div className="dja_story_design_wrap" id="dja_design_1">
						<img src={PolygonLeft} alt="story" />
					</div>
					<div className="dja_story_design_wrap" id="dja_design_2">
						<img src={PolygonRight} alt="story" />
					</div>
				</section>

				<section className="dja_why_section">
					<div className="dja_container">
						<h2 className="dja_title">Why Us?</h2>
						<div className="dja_why_ctn">
							{WHY_US.map((item) => (
								<WhyUsCard title={item.title} content={item.content} />
							))}
						</div>
					</div>
				</section>

				<section className="dja_team_section">
					<div className="dja_container">
						<h2 className="dja_title">Our Team</h2>
						<div className="dja_team_ctn">
							{TEAM.map((item, i) => (
								<TeamMemberCard name={item.name} index={i} role={item.role} />
							))}
						</div>
					</div>
				</section>
			</div>
			{/* <Footer /> */}
			<Foooter />
		</>
	);
};

export default AboutUs;
