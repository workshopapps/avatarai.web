import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import log from '../../assets/images/log.png';
import Button from '../landingPage/Button/Button';
import Navbar from '../landingPage/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../../../context/auth-context';

const Login = ({ props }) => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { login, setToken, token } = useAuth();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	/** Remember to pass user data to api for storage */
	const url = `${import.meta.env.VITE_API_URL}/api/user/login`;
	const onSubmit = async (data) => {
		setLoading(true);
		await axios
			.post(url, data)
			.then((response) => {
				console.log(response, 'response');

				//Reset login form
				reset();
				setLoading(false);

				//Get token and save to local storage
				const token = response?.data?.token;
				localStorage.setItem('zvt_token', JSON.stringify(token));

				//save token to state
				setToken(token);
				login(response?.data?.user);
			})
			.catch((e) => {
				setLoading(false);
				const err = e?.response?.data?.errors;
				console.log(err);
			});
	};

	useEffect(() => {
		const getUser = localStorage.getItem('zvt_token');
		if (getUser) {
			navigate('/dashboard');
		}
	}, [token]);

	return (
		<div className="md:h-screen">
			<Navbar />
			<div className="flex flex-col-reverse gap-6 md:flex-row w-full h-full md:pl-[60px]">
				<div className="flex flex-col gap-6 md:gap-8 w-full justify-center px-6 md:px-[60px]">
					<div className="flex flex-col gap-1 md:gap-[10px]">
						<h1 className="text-xl md:text-4xl font-semibold text-[#333333]">Welcome back</h1>
						<p className="md:text-2xl font-medium text-[#333333]">Log in to have access to your account</p>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full">
						<div className="flex flex-col gap-4">
							<div className="flex flex-col w-full">
								<label className="text-[#333333]" htmlFor="email">
									Email
								</label>
								<input
									type="text"
									id="email"
									placeholder="Email address"
									className={`border ${errors.email && 'border-red-600'} p-3 w-full my-1 rounded-lg outline-none`}
									required
									{...register('email', {
										required: true,
										pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
									})}
								/>
								{errors.email && <span className="text-xs text-red-600">Please enter a valid email address</span>}
							</div>
							<div>
								<label className="text-[#333333]" htmlFor="password">
									Password
								</label>
								<input
									type="password"
									id="password"
									placeholder="Password"
									className={`border ${errors.password && 'border-red-600'} p-3 w-full my-1 rounded-lg outline-none`}
									required
									{...register('password', {
										required: true,
										minLength: 8,
									})}
								/>
								{errors.password && (
									<span className="text-xs text-red-600">Password must be at least 8 characters long</span>
								)}
							</div>
						</div>
						<div className="flex justify-between items-center outline-none">
							<div className="flex items-center gap-2 md:gap-5">
								<input className="h-4 w-4 md:h-[26px] md:w-[26px]" type="checkbox" name="remember" id="remember" />
								<span className="text-[#333333] text-base md:text-[20px] font-medium">Remember me</span>
							</div>
							<p className="text-[#8B70E9] text-base md:text-[20px] font-medium">
								<Link to="/forgot-password">Forgot Password</Link>
							</p>
						</div>
						<Button type="submit" className="w-full bg-[#8B70E9] text-white">
							{loading ? 'Loading...' : 'Login'}
						</Button>
						<p className="text-center text-[#333333] text-base md:text-xl font-semibold">
							Dont have an account?{' '}
							<a href="sign-up" className="text-[#8B70E9] text-base md:text-xl font-semibold">
								Sign Up
							</a>
						</p>
					</form>
				</div>
				<div className="flex flex-col-reverse md:flex-col items-center justify-center gap-[18px] md:gap-16 w-full">
					<div className="w-[128px] md:w-[305px]">
						<img src={log} alt="" className="bg-white rounded-full object-scale-down " />
					</div>
					<p className="md:block hidden text-[14px] md:text-[32px] font-semibold max-w-[228px] md:max-w-[547px] text-center text-[#333333]">
						Generate and customize AI Avatars just the way you like it!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
