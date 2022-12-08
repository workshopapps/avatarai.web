import './frame-eye.css';
import GrayLine from './../DASHBOARD_COMPONENT/img/gray-rect.svg';
import PurpleLine from './../DASHBOARD_COMPONENT/img/purple-rect.svg';
import female_icon from './Female User.svg';
import dog_icon from './Dog Sit.svg';
import cat_icon from './Cat Pot.svg';
import Couple from './Couple-Posing.svg';
import other from './Decision.svg';
import male_icon from './User Male.svg';
import { useState } from 'react';

// let personality;

const FrameEye = ({ setStep, setPhotoUser }) => {
	const [list, setList] = useState([
		{
			user: 'Male',
			icon: male_icon,
		},
		{
			user: 'Female',
			icon: female_icon,
		},
		{
			user: 'Cat',
			icon: cat_icon,
		},
		{
			user: 'Dog',
			icon: dog_icon,
		},
		{
			user: 'Couple',
			icon: Couple,
		},
		{
			user: 'Others',
			icon: other,
		},
	]);

	const [toggle, setToggle] = useState(false);
	const [work, setWork] = useState(true);

	const change = (e) => {
		if (e) {
			setWork((work) => {
				false;
			});
		} else {
			setWork((work) => {
				true;
			});
		}
	};

	return (
		<div className="vnc-main overflow-x-hidden">
			<div className="md:mb-5 flex items-center justify-center gap-3 w-full">
				<img src={PurpleLine} alt="" className="w-[50px] md:w-[120px] md:h-[5px] " />
				<img src={GrayLine} alt="" className="w-[50px] md:w-[120px] md:h-[5px]" />
				<img src={GrayLine} alt="" className="w-[50px] md:w-[120px] md:h-[5px]" />
			</div>
			<div className="vnc-text">
				<h2 className="text-nunito">You are a ...</h2>
			</div>
			<form action="" method="post">
				<div className="grid grid-cols-3 gap-3 md:grid-cols-6 ">
					{list.map((e, index) => (
						<div
							onClick={() => {
								setToggle(e);
								setPhotoUser(e.user);
								change(e);
								console.log(index);
							}}
							key={index}
							className={`vnc-selection ${e === toggle && 'active'}`}
						>
							<p>{e.user}</p>
							<img className="vnc-icon-image" src={e.icon} alt="" />
						</div>
					))}
				</div>

				<div className="vnc_proceed my-20">
					<input
						className="input_btn"
						disabled={work}
						type="button"
						value="Proceed"
						onClick={() => setStep(2)}
						//onClick={localStorage.setItem("personality", JSON.stringify(personality))}
					/>
				</div>
			</form>
		</div>
	);
};

export default FrameEye;
