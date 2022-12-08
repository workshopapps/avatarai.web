/* dependency imports */
import { Link, useNavigate } from "react-router-dom";

/* style imports */
import style from "./frame_4.module.css";

/* images import*/
import back from "./back.svg";
import receivedmail from "./receivedmail.svg";

const AvatarSuccess = () => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('userData'));

	return (
		<>
			<section className={style.container}>
				<img src={back} alt="go back" className={style.back} onClick={() => navigate('/dashboard')} />
				<article className={style.main}>
					<h4>Congratulations {user.username},</h4>
					<img src={receivedmail} alt="recieved mail" />
					<p>Your avatars has been sent to {user.email}</p>
				</article>
			</section>
			<div className={style.linkdiv}>
				<Link to="/Dashboard_2">Generate More</Link>
			</div>
		</>
	);
};

export default AvatarSuccess;

