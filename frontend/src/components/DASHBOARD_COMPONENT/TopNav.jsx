import React from 'react';
import MenuIcon from './img/menu.svg';
import Logo from './img/logo.svg';
import Dashboardtranslate from './dashboardtranslate';

export const TopNav = ({ profile, setProfile, show, setShow }) => {
	return (
		<div className="mb-[60px]">
			<nav className="pl-6">
				<div  className='flex items-center justify-between mb-[40px] xl:mb-0 '>
					<div className="">
						<div className="text-gray-600 visible xl:hidden relative" onClick={() => setShow(!show)}>
							{show ? ' ' : <img src={MenuIcon} alt="Menu" />}
						</div>
					</div>

					<img src={Logo} alt="Logo" className="xl:hidden block" />

					<div></div>
				</div>

				<div className="flex items-center justify-between gap-5">
					<div>
						<h1 className="text-[24px] md:text-[40px] text-[#000] font-bold">Hello Baki,</h1>
						<p className="text-[#6c6c6c] text-sm md:text-[18px]">Start generating cool avatars.</p>
					</div>
					<div>
						<Dashboardtranslate />
					</div>
				</div>
			</nav>
		</div>
	);
};
