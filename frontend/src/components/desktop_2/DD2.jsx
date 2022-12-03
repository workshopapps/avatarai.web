import React from 'react';
// import Dashboardcomp from '../DASHBOARD_COMPONENT/dashboardcomp';
import Dashboardlayout from '../DASHBOARD_COMPONENT/DashboardLayout';
import ImageUpload from './DD2Content';

const DD2 = () => {
	return (
		<div>
			<Dashboardlayout title="Hello Baki," text="Start generating cool avatars.">
				<ImageUpload />
			</Dashboardlayout>
		</div>
	);
};

export default DD2;
