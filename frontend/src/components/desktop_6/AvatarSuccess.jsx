/* dependency imports */

import Button from '../landingPage/Button/Button';
import style from './frame_4.module.css';
import back from './back.svg';
import clock from './clock.svg';
import { useAuth } from '../../../context/auth-context';

const AvatarSuccess = ({ setStep, step }) => {
	const { user } = useAuth();

	return (
		<>
			<section className={style.container}>
				<img src={back} alt="go back" className={style.back} onClick={() => setStep(step - 1)} />
				<article className={style.main}>
					<h4>Congratulations {user?.first_name},</h4>
					<img src={clock} alt="recieved mail" />
					<p>Your avatars are being generated and would be sent to {user?.email}.</p>
					<p>This process would take some time.</p>
				</article>
			</section>
			<div className="w-full flex justify-center mt-[30px]" onClick={() => setStep(1)}>
				<Button className="bg-[#8B70E9] w-100 w-lg-120 text-[20px] font-bold text-white" children="Generate More" />
			</div>
		</>
	);
};

export default AvatarSuccess;
