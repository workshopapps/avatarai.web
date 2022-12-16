import React, { useState } from 'react';
import { SideBar } from './SideBar';
import { TopNav } from './TopNav';
import { useAuth } from '../../../context/auth-context';
import InstructionModal from './instructionModal';
import { useLocation } from 'react-router-dom';

const Dashboardlayout = ({ children, title, text }) => {
	const [show, setShow] = useState(false);
	const [profile, setProfile] = useState(false);
	const user = useAuth();
	console.log(user, 'from najjiv');
	const location = useLocation();

	return (
		<>
			<div className="w-full max-h-screen bg-[#FFFFFF] lg:bg-[#FAFAFA] relative">
				<div className="flex flex-no-wrap h-full">
					<SideBar show={show} setShow={setShow} />
					<div className="w-full h-screen overflow-y-auto">
						<div className="mx-auto py-[36px] px-3 lg:px-6 ">
							<TopNav
								title={title}
								text={text}
								show={show}
								setShow={setShow}
								profile={profile}
								setProfile={setProfile}
							/>
							{location.pathname === '/dashboard' && (
								<div>
									<InstructionModal />
								</div>
							)}

							<div className="w-full max-w-[1240px] mx-auto">{children}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboardlayout;
