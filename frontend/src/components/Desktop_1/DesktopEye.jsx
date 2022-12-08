import '../desktop_4/DD4.css';

// import Background from '../DASHBOARD_COMPONENT/dashboardcomp';
// import Content from '../desktop_4/DD4content';
import FrameEye from './FrameEye';
import React from 'react';
import ArrowDown from './arrowdown.svg';
import Dashboardlayout from '../DASHBOARD_COMPONENT/DashboardLayout';
import InstructionModal from '../DASHBOARD_COMPONENT/instructionModal';

const DesktopEye = () => {
	const user = JSON.parse(localStorage.getItem('userData'));
	console.log(user);
	return (
		<div>
			<Dashboardlayout title={`Hello ${user?.Firstname}`} text="Start generating cool avatars.">
				<InstructionModal />
				<FrameEye />
			</Dashboardlayout>
		</div>
	);
};

export default DesktopEye;
