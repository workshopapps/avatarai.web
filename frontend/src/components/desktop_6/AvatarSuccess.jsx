/* dependency imports */
import { Link, useNavigate } from 'react-router-dom';
import Button from '../landingPage/Button/Button';

/* style imports */
import style from './frame_4.module.css';

/* images import*/
import back from './back.svg';
import receivedmail from './recievedmail.svg';

const AvatarSuccess = ({ setStep, step }) => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('userData'));

	return (
		<>
			<section className={style.container}>
				<img src={back} alt="go back" className={style.back} onClick={() => navigate('/dashboard')} />
				<article className={style.main}>
					<h4>Congratulations {user.Firstname},</h4>
					<img src={receivedmail} alt="recieved mail" />
					<p>Your avatars has been sent to {user.email}</p>
				</article>
			</section>
			<div className="w-full flex justify-center mt-[60px]">
				<Button className="bg-[#8B70E9] w-100 w-lg-120 text-[20px] font-bold text-white" children="Generate More" />
			</div>
		</>
	);
};

export default AvatarSuccess;
