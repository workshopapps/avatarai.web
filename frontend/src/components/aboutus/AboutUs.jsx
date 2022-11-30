import WhyUsCard from './WhyUsCard';
import TeamMemberCard from './TeamMemberCard';
import './aboutUs.css';
import Banner from './img/aboutBg.png';
import PolygonLeft from './img/polygonLeft.png';
import PolygonRight from './img/polygonRight.png';
import Navbar from '../landingPage/Navbar/Navbar';
import Banner2 from './img/image1.svg';

import { WHY_US, TEAM } from './data';
// import Footer from "../Footerpage/Footer";
import Foooter from '../footer/Foooter';

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

				<section className="py-3 lg:py-[48px] px-5">
					<div className="flex justify-between items-start gap-3 md:gap-5 max-w-[1200px] mx-auto ">
						<h2 className="text-[#333333] font-semibold text-[20px] lg:text-[64px] leading-[20px] lg:leading-[81px] flex-auto w-56 md:w-64">
							We are on a mission to change <span className="text-[#808080]">the face of art creation.</span>
						</h2>
						<p className="font-normal flex flex-col items-center mt-[40px] lg:mt-[80px] flex-auto w-44 md:w-32">
							<span className="text-[#808080] text-[48px] md:text-[64px] leading-[0px]">“</span>
							<span className="text-[10px] lg:text-[24px] font-normal">
								Having known that AI Art has been a thing for years, the team thought "maybe we can create a software
								that can generate avatars of people in different environments.
							</span>
							<span className="text-[#808080] text-[48px] md:text-[64px] leading-4 mt-7">”</span>
						</p>
					</div>
				</section>

				<section className="w-full">
					<img src={Banner2} alt="Large banner" className="w-full" />
				</section>

				<section className="py-5 lg:py-[48px] px-5">
					<div className="flex justify-between gap-3 md:gap-5 max-w-[1200px] mx-auto ">
						<p className="font-normal flex flex-col items-center mt-auto lg:mt-[80px] flex-auto max-w-[413px]">
							<span className="text-[#808080] text-[48px] md:text-[64px] leading-[0px]">“</span>
							<span className="text-[10px] lg:text-[24px] font-normal">
								With Zuvatar, users get to create avatars and protect their physical identity on any social platform and
								maintain anonymity in a virtual world.
							</span>
							<span className="text-[#808080] text-[48px] md:text-[64px] leading-4 mt-7">”</span>
						</p>
						<h2 className="text-[#333333] font-semibold text-[16px] mt-[60px] lg:text-[64px] leading-[16px] lg:leading-[81px] flex-auto md:w-64">
							"Art privacy is crucial, and <span className="text-[#808080]">Zuvatar</span> is making it{' '}
							<span className="text-[#808080]">possible</span>" - <span className="text-[#808080]">Team Tape</span>.
						</h2>
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
