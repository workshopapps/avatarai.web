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
					<div className="lg:h-[300px] flex justify-between items-start gap-3 md:gap-5 max-w-[1200px] mx-auto ">
						<div className="flex-auto w-56 md:w-64 flex h-full">
							<h2 className="text-[#333333] font-semibold text-[20px] lg:text-[64px] leading-[20px] lg:leading-[81px]">
								We are on a mission to change <span className="text-[#808080]">the face of art creation.</span>
							</h2>
						</div>

						<div className="flex-auto w-44 md:w-32 flex items-end h-full">
							<p className="font-normal flex flex-col items-center mt-[40px] lg:mt-[80px]">
								<span className="text-[#808080] text-[48px] md:text-[64px] leading-[0px]">“</span>
								<span className="text-[10px] lg:text-[24px] font-normal">
									Having known that AI Art has been a thing for years, the team thought "maybe we can create a software
									that can generate avatars of people in different environments.
								</span>
								<span className="text-[#808080] text-[48px] md:text-[64px] leading-4 mt-7">”</span>
							</p>
						</div>
					</div>
				</section>

				<div className="w-full pb-5">
					<img src={Banner2} alt="Large banner" className="w-full" />
				</div>

				<section className="pt-3 lg:pt-[48px] px-5">
					<div className="lg:h-[300px] flex justify-between gap-3 md:gap-5 max-w-[1200px] mx-auto border-b border-[#808080] pb-3 lg:pb-[48px]">
						<div className="flex-auto max-w-[413px] flex items-end h-full">
							<p className="font-normal flex flex-col items-center">
								<span className="text-[#808080] text-[48px] md:text-[64px] leading-[0px]">“</span>
								<span className="text-[10px] lg:text-[24px] font-normal">
									With Zuvatar, users get to create avatars and protect their physical identity on any social platform
									and maintain anonymity in a virtual world.
								</span>
								<span className="text-[#808080] text-[48px] md:text-[64px] leading-4 mt-7">”</span>
							</p>
						</div>

						<div className="flex-auto md:w-64 flex h-full">
							<h2 className="text-[#333333] font-semibold text-[16px] lg:text-[64px] leading-[16px] lg:leading-[81px]">
								"Art privacy is crucial, and <span className="text-[#808080]">Zuvatar</span> is making it{' '}
								<span className="text-[#808080]">possible</span>" - <span className="text-[#808080]">Team Tape</span>.
							</h2>
						</div>
					</div>
				</section>

				{/* <section className="dja_why_section">
					<div className="dja_container">
						<h2 className="dja_title">Why Us?</h2>
						<div className="dja_why_ctn">
							{WHY_US.map((item) => (
								<WhyUsCard title={item.title} content={item.content} />
							))}
						</div>
					</div>
				</section> */}

				<section className="px-5 mt-[48px]">
					<div className="max-w-[1200px] mx-auto">
						<h2 className="font-bold text-[24px] md:text-[48px] mb-[24px]">
							Meet our <br /> Amazing Team
						</h2>
						<p className='text-sm md;text-[24px] mb-[48px]'>
							Zuvatar was founded by a team of creatives in November 2022 during the most powerful internship in the
							world (HNG). What brought the team together was a spark of ideas, and an idea to help online users to have
							enough physical privacy on any online forum.
						</p>
						<div className="dja_team_ctn">
							{TEAM.map((item, i) => (
								<TeamMemberCard index={i} profile={item} />
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
