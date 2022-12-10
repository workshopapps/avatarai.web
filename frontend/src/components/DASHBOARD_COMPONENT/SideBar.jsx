import React from 'react';
import { Link } from 'react-router-dom';
// import { navItems } from '../data';
import Logo from './img/logo.svg';

import Icon1 from './img/group.svg';
import Icon1Active from './img/group-active.svg';

import Icon2 from './img/file.svg';
import Icon2Active from './img/file-active.svg';
import Icon3 from './img/profile-add.svg';
import Icon3Active from './img/profile-add-active.svg';
import Icon4 from './img/support.svg';
// import Icon4Active from './img/support-active.svg';
import Icon5 from './img/setting.svg';
// import Icon5Active from './img/setting-active.svg';
import Icon6 from './img/message-2.svg';
// import Icon6Active from './img/message-active.svg';

import { useLocation } from 'react-router-dom';
import ProfileUI from './ProfileUI';

const navItems = [
	{
		title: 'Create avatar',
		icon: Icon1,
		activeIcon: Icon1Active,
		link: '/dashboard',
		pathname: 'dashboard',
		id: 1,
	},
	{
		title: 'Generated avatars',
		icon: Icon2,
		activeIcon: Icon2Active,
		link: '#',
		pathname: 'avatars',
		id: 2,
	},
	{
		title: 'Profile',
		icon: Icon3,
		activeIcon: Icon3Active,
		link: '/profile',
		pathname: 'profile',
		id: 3,
	},
	{
		title: 'Support',
		icon: Icon4,
		activeIcon: Icon1Active,
		link: '#',
		pathname: 'support',
		id: 4,
	},
	{
		title: 'Setting',
		icon: Icon5,
		activeIcon: Icon1Active,
		link: '#',
		pathname: 'setting',
		id: 5,
	},
	{
		title: 'Chat',
		icon: Icon6,
		activeIcon: Icon6,
		link: '/chat',
		pathname: 'chat',
		id: 6,
	},
];

export const SideBar = ({ show, setShow }) => {
	const location = useLocation();

	console.log(location);
	const isActive = (link) => {
		console.log('l', link);
		if (location.pathname.includes(link)) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<>
			<div className="absolute xl:relative w-[300px] overflow-y-auto shadow bg-[#FFFFFF] hidden xl:block">
				{/* //Desktop UI */}
				<div className="w-full flex justify-left mt-[52px] mb-5">
					<img src={Logo} alt="logo" className="ml-8" />
				</div>
				<div className="flex flex-col justify-between h-[80vh]">
					<ul className="py-3">
						{navItems.map((item, i) => {
							return (
								<Link to={item.link} key={i}>
									<li
										className={`px-4 py-3 cursor-pointer font-semibold focus:outline-none mb-2 hover:bg-[#8B70E94D] rounded-[5px] ml-[15px] mr-[15px] text-base text-[#6C6C6C] hover:text-[#241B8F ] ${
											isActive(item.pathname) ? 'bg-[#8B70E94D]' : ''
										}`}
									>
										<div className="flex items-center gap-4">
											<div>
												<img src={isActive(item.pathname) ? item.activeIcon : item.icon} alt={item.title} />
											</div>

											<div>
												<p className={isActive(item.pathname) ? 'text-[#241B8F]' : 'text-[#6C6C6C]'}>{item.title}</p>
											</div>
										</div>
									</li>
								</Link>
							);
						})}
					</ul>

					<ProfileUI />
				</div>
			</div>
			{/* //Mobile UI */}
			<div
				className={
					show
						? 'w-full h-screen absolute z-[200]  transform  translate-x-0 '
						: '   w-full h-screen absolute z-[200]  transform -translate-x-full'
				}
				id="mobile-nav"
			>
				<div className="bg-[#000000] opacity-50 absolute h-screen w-full xl:hidden" onClick={() => setShow(!show)} />
				<div className="absolute z-[200] sm:relative w-64 md:w-96 shadow pb-4 bg-[#FFFFFF] xl:hidden transition duration-150 ease-in-out h-screen overflow-y-auto">
					<div className="flex flex-col justify-between h-full w-full">
						<div>
							<div className="flex items-center justify-between py-[15px] px-5">
								<div className="w-full flex justify-left">
									<img src={Logo} alt="logo" className="" />
								</div>
								<div id="closeSideBar" className="" onClick={() => setShow(!show)}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-x"
										width={30}
										height={30}
										viewBox="0 0 24 24"
										strokeWidth="2"
										stroke="#000000"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" />
										<line x1={18} y1={6} x2={6} y2={18} />
										<line x1={6} y1={6} x2={18} y2={18} />
									</svg>
								</div>
							</div>
							<div className="flex flex-col justify-between h-[85vh] overflow-y-auto ">
								<ul className="py-3">
									{navItems.map((item, i) => {
										return (
											<Link to={item.link} key={i}>
												<li
													className={`px-4 py-3 cursor-pointer font-semibold focus:outline-none mb-2 hover:bg-[#8B70E94D] rounded-[5px] ml-[15px] mr-[15px] text-base text-[#6C6C6C] hover:text-[#241B8F ] ${
														isActive(item.pathname) ? 'bg-[#8B70E94D]' : ''
													}`}
												>
													<div className="flex items-center gap-4">
														<div>
															<img src={isActive(item.pathname) ? item.activeIcon : item.icon} alt={item.title} />
														</div>

														<div>
															<p className={isActive(item.pathname) ? 'text-[#241B8F]' : 'text-[#6C6C6C]'}>
																{item.title}
															</p>
														</div>
													</div>
												</li>
											</Link>
										);
									})}
								</ul>
								<ProfileUI />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
