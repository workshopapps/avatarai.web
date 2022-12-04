import '../desktop_4/DD4.css';

// import Background from '../DASHBOARD_COMPONENT/dashboardcomp';
// import Content from '../desktop_4/DD4content';
import FrameEye from './FrameEye';
import React from 'react';
import ArrowDown from './arrowdown.svg';
import Dashboardlayout from '../DASHBOARD_COMPONENT/DashboardLayout';

const DesktopEye = () => {
	return (
		<div>
			<Dashboardlayout title="Hello" text="Start generating cool avatars.">
				<div className="flex items-center gap-5 ml-6">
					<p className="text-[#000] text-sm md:text-[20px] font-bold">Read upload instructions</p>
					<img src={ArrowDown} alt="arrow-down" />
				</div>
				<FrameEye />
			</Dashboardlayout>
		</div>
	);
};

export default DesktopEye;
