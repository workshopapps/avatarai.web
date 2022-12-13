import React, { useEffect } from 'react';
import './signup.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import ErrorSuccessCard from '../utils/ErrorSuccessCard.jsx';
import Button from '../landingPage/Button/Button';
import Input from '../Input/Input';

let state;
let result;
export default function SignUp_first() {
	state = {
		disabled: true,
	};
	const handleclick = (e) => {
		if (e.target.checked && document.getElementById('myinput_opt').target.value !== '') {
			this.setState({
				disabled: false,
			});
		} else {
			this.setState({
				disabled: true,
			});
		}
	};

	const [googlesignup, setgooglesignup] = useState('');

	const signup = useGoogleLogin({
		onSuccess: (tokenResponse) => setgooglesignup(tokenResponse),
		onError: () => console.log('Login with Google Failed'),
	});

	//  Navigates to the Opt_sec page
	useEffect(() => {
		if (googlesignup) {
			navigate('/Opt_sec');
		}
	}, [googlesignup]);

	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [show_s, setShow_s] = useState(true);
	const [show_s_, setShow_s_] = useState(true);

	const [show, setShow] = useState(true);

	const click = (event) => {
		setShow((current) => !current);
	};
	const [input, setInput] = useState({
		password: '',
		confirmPassword: '',
	});

	const [error, setError] = useState({
		password: 'Must be 8 characters long',
		confirmPassword: 'Both passwords must match',
	});

	const onInputChange = (e) => {
		const { name, value } = e.target;
		setInput((prev) => ({
			...prev,
			[name]: value,
		}));
		validateInput(e);
	};
	const validateInput = (e) => {
		let { name, value } = e.target;
		setError((prev) => {
			const stateObj = { ...prev, [name]: '' };

			switch (name) {
				case 'password':
					if (!value) {
						stateObj[name] = 'Please enter Password.';
					} else if (input.confirmPassword && value !== input.confirmPassword) {
						stateObj['confirmPassword'] = 'Password and Confirm Password does not match.';
					} else {
						stateObj['confirmPassword'] = input.confirmPassword ? '' : error.confirmPassword;
					}
					break;

				case 'confirmPassword':
					if (!value) {
						stateObj[name] = 'Please enter Confirm Password.';
					} else if (input.password && value !== input.password) {
						stateObj[name] = 'Password and Confirm Password does not match.';
					}
					break;

				default:
					break;
			}

			return stateObj;
		});
	};

	const [first_name, setFirstName] = useState('');
	const [last_name, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [errorStatus, setErrorStatus] = useState({
		error: null,
		message: '',
	});
	async function signUp() {
		setLoading(true);

		let password = input.password;
		let item = { first_name, last_name, email, password };
		let firstname = item.first_name;
		let lastname = item.last_name;
		let email_ = item.email;
		let password_ = item.password;
		let checkVerified = false;
		let items = {
			first_name: firstname,
			last_name: lastname,
			email: email_,
			password: password_,
			verified: checkVerified,
		};

		console.log('items', item);
		localStorage.setItem('opt_mail', JSON.stringify(item.email));
		result = await fetch('https://zuvatar.hng.tech/api/v1/api/user', {
			method: 'POST',
			body: JSON.stringify(items),
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		result = await result.json();
		console.log('result', result);
		if (!result.detail) {
			navigate('/Opt_sec');
			setErrorStatus({ error: false, message: 'A confirmation email has been sent' });
		} else {
			setErrorStatus({ error: true, message: result?.detail?.message });
		}
		setLoading(false);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if (error.confirmPassword === '') {
			signUp();
		}
	};

	return (
		<div className="min-h-screen object-scale-down flex items-center justify-center">
			<div className="flex gap-16 p-6 w-full justify-center max-w-[1440px]">
				<div className="hidden lg:flex flex-col rounded-2xl items-center bg-[#6c6191] justify-center w-full max-w-[535px] px-14 py-32">
					<div className="flex flex-col gap-4 w-full">
						<h2 className="font-nunito font-extrabold text-5xl text-white max-w-2xl">
							Create your own AI-generated Avatars
						</h2>
						<p className="font-nunito font-medium text-2xl text-[#bfc3d4] max-w-xs">
							Create profile pictures, online gaming display pictures, and much more on the go.
						</p>
					</div>
					<div className="h-12 w-full"></div>
					<div className="w-full h-[350px] relative">
						<div className="absolute left-44 top-10">
							<img src="/arrow.svg" />
						</div>
						<div className="absolute h-[222px] w-[163px]">
							<div className="absolute -top-2 -left-2 bg-white h-[222px] w-[163px]"></div>
							<img className="absolute" src="/parker-og.png" />
						</div>
						<div className="absolute h-[180px] w-[180px] bottom-2 right-8">
							<div className="absolute bg-white h-[180px] w-[180px] -bottom-2 -right-2"></div>
							<img src="parker-avartar.png" className="absolute" />
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full items-center max-w-lg py-2">
					<div className="logo w-10 h-10">
						<img src="/tapart.svg" />
					</div>
					<div className="h-[10%] lg:h-12"></div>
					<div className="flex flex-col gap-4 lg:gap-10 w-full">
						<h1 className="font-nunito font-extrabold lg:text-5xl text-2xl text-[#212529]">Sign Up</h1>
						<div className="flex flex-col gap-2">
							<p className="font-nunito font-semibold lg:text-4xl text-base text-[#212529]">Create new account</p>
							<div>
								<span className="font-nunito font-medium text-sm lg:text-xl text-[#808080]">Already a member? </span>
								<Link to="/login">
									<a className="font-nunito font-bold text-sm lg:text-xl text-[#6c6191]">Log in</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="h-5 lg:h-8"></div>
					{errorStatus.message && <ErrorSuccessCard error={errorStatus.error} message={errorStatus.message} />}
					<form onSubmit={handleSubmit} method="post" className="flex flex-col w-full gap-5 lg:gap-7">
						<div className="flex flex-col">
							<label htmlFor="email" className="text-black font-nunito font-medium text-sm lg:text-xl">
								First name
							</label>
							<input
								name="first name"
								type="text"
								required
								id="myinput_op"
								placeholder="First Name"
								value={first_name}
								onChange={(e) => setFirstName(e.target.value)}
								className={`border border-[#121212] py-3 px-4 rounded-md placeholder-[#808080] text-sm lg:text-xl font-nunito font-medium w-full`}
							/>
						</div>

						<div className="flex flex-col">
							<label htmlFor="email" className="text-black font-nunito font-medium text-sm lg:text-xl">
								Last name
							</label>
							<input
								name="last name"
								id="myinput_o"
								value={last_name}
								onChange={(e) => setLastName(e.target.value)}
								placeholder="Last Name"
								type="text"
								required
								className={`border border-[#121212] py-3 px-4 rounded-md placeholder-[#808080] text-sm lg:text-xl font-nunito font-medium w-full`}
							/>
						</div>

						<div className="flex flex-col">
							<label htmlFor="email" className="text-black font-nunito font-medium text-sm lg:text-xl">
								Email Address
							</label>
							<input
								id="myinput_opt"
								placeholder="Email Address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								name="email"
								required
								className={`border border-[#121212] py-3 px-4 rounded-md placeholder-[#808080] text-sm lg:text-xl font-nunito font-medium w-full`}
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="email" className="text-black font-nunito font-medium text-sm lg:text-xl">
								Password
							</label>
							<input
								id="myinput_opt"
								name="password"
								placeholder="Password"
								minLength="8"
								value={input.password}
								onChange={onInputChange}
								onBlur={validateInput}
								type="password"
								className={`border border-[#121212] py-3 px-4 rounded-md placeholder-[#808080] text-sm lg:text-xl font-nunito font-medium w-full`}
							/>
							<div className="">
								{error.password && (
									<div className="info__opt">
										<img
											className="info_opt"
											src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670070847/info_outline_jgpkxp.png"
											alt="info.png"
										/>
										{error.password}
									</div>
								)}
							</div>
						</div>
						<div className="flex flex-col">
							<label htmlFor="email" className="text-black font-nunito font-medium text-sm lg:text-xl">
								Confirm Password
							</label>
							<input
								id="myinput_opt"
								role="Opt_pass"
								name="confirmPassword"
								value={input.confirmPassword}
								onChange={onInputChange}
								onBlur={validateInput}
								placeholder="Password"
								type="password"
								className={`border border-[#121212] py-3 px-4 rounded-md placeholder-[#808080] text-sm lg:text-xl font-nunito font-medium w-full`}
							/>
							{error.confirmPassword && (
								<div className="info__opt">
									<img
										className="info_opt"
										src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670070847/info_outline_jgpkxp.png"
										alt="info.png"
									/>
									{error.confirmPassword}
								</div>
							)}
						</div>

						<Button
							type="submit"
							className="bg-[#8B70E9] text-white font-nunito font-bold text-lg lg:text-xl p-4 rounded-lg mt-3"
						>
							{loading ? 'Loading...' : 'Sign Up'}
						</Button>
					</form>
					<div className="h-7 lg:h-10"></div>

					{/* <button className="button_opt"onClick={signup} >
		        <div className="gog_opt"  >
		          <img
		            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670070846/google_npmeof.png"
		            className="google_opt"
		            alt="google.png"
		          />
		          <span className="annoyed_opt">Sign Up with Google</span>
		        </div>
		      </button> */}
					<div className="h-6"></div>
				</div>
			</div>
		</div>
		
	);
}
