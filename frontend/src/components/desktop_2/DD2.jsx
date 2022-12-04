import React from 'react';
// import Dashboardcomp from '../DASHBOARD_COMPONENT/dashboardcomp';
import Dashboardlayout from '../DASHBOARD_COMPONENT/DashboardLayout';
import ImageUpload from './DD2Content';
import {useAuth} from "../../../context/auth-context"
import InstructionModal from '../DASHBOARD_COMPONENT/instructionModal';
const DD2 = () => {
	const {user} = useAuth()
	return (
		<div>
			<Dashboardlayout title="Hello " text="Start generating cool avatars.">
				<InstructionModal />
				<ImageUpload />
			</Dashboardlayout>
		</div>
	);
};

export default DD2;
