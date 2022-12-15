import '../desktop_4/DD4.css';

// import Background from '../DASHBOARD_COMPONENT/dashboardcomp';
// import Content from '../desktop_4/DD4content';
import FrameEye from './FrameEye';
import ImageUpload from '../desktop_2/DD2Content';
import React from 'react';
import Dashboardlayout from '../DASHBOARD_COMPONENT/DashboardLayout';
import InstructionModal from '../DASHBOARD_COMPONENT/instructionModal';
import { useState } from 'react';
import { useAuth } from '../../../context/auth-context';
import AvatarSuccess from '../desktop_6/AvatarSuccess';

const DesktopEye = () => {
	// const user = JSON.parse(localStorage.getItem('userData'));
	const { user } = useAuth();

	const [step, setStep] = useState(1);
	const [photoUser, setPhotoUser] = useState("")

	return (
		<div>
			<Dashboardlayout title={`Hello ${user?.first_name}`} text="Start generating cool avatars.">

				{step === 1 && <FrameEye setStep={setStep} step={step} setPhotoUser={setPhotoUser} photoUser={photoUser} />}
				{step === 2 && <ImageUpload setStep={setStep} step={step} photoUser={photoUser} />}
				{step === 3 && <AvatarSuccess setStep={setStep} step={step} />}
			</Dashboardlayout>
		</div>
	);
};

export default DesktopEye;
