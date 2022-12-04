import React from 'react';
import Dashboardlayout from '../DASHBOARD_COMPONENT/DashboardLayout';
import InstructionModal from '../DASHBOARD_COMPONENT/instructionModal';
import './DD4.css';
import Content from './DD4content';
// import Background from './../DASHBOARD_COMPONENT/dashboardcomp';

function Destopfour() {
	return (
		<div>
			<Dashboardlayout title="Hello Baki," text="Start generating cool avatars.">
				<InstructionModal />
				<Content />
			</Dashboardlayout>
		</div>
	);
}

export default Destopfour;
