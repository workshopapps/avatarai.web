import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Dashboardlayout from '../DASHBOARD_COMPONENT/DashboardLayout';
import Avatar from '../../assets/images/avatar.png';
import ErrorSuccessCard from '../utils/ErrorSuccessCard';
import './Profile.css';
import Button from '../landingPage/Button/Button';
import { useAuth } from '../../../context/auth-context';

const Profile = () => {
	const { user, getUser } = useAuth();
	const [loading, setLoading] = useState(false);
	const [errorStatus, setErrorStatus] = useState({
		error: null,
		message: '',
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();


	const BaseUrl = `${import.meta.env.VITE_API_URL}`;
	const onSubmit = async (data) => {
		setLoading(true);
		await axios
			.put(`${BaseUrl}/updateUser`, data, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				console.log(response?.data, 'response');

				getUser();
				// localStorage.setItem('zvt_user', JSON.stringify(user));

				setErrorStatus({ error: false, message: 'Profile updated successfully' });
				setTimeout(() => {
					setErrorStatus({ error: null, message: '' });
				}, 3000);

				setLoading(false);
			})
			.catch((e) => {
				setLoading(false);
				const err = e?.response?.data?.detail;
				setErrorStatus({ error: true, message: err });
				setTimeout(() => {
					setErrorStatus({ error: null, message: '' });
				}, 5000);
				console.log(err);
			});
	};

	// const fetchUser = async () => {
	// 	await axios
	// 		.get(`${BaseUrl}/user/${user.email}`, {
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		})
	// 		.then((response) => {
	// 			console.log(response, 'user');
	// 		})
	// 		.catch((e) => {
	// 			const err = e?.response?.data?.detail;
	// 			console.log(err);
	// 		});
	// };

	useEffect(() => {
		console.log(user, "user")
		reset({
			first_name: user?.first_name,
			last_name: user?.last_name,
			email: user?.email,
		});
	}, []);

	return (
		<Dashboardlayout title="Profile" text="See your personal information">
			<main className="aso-profile relative">
				<section className="aso-profile-section">
					<div className=" w-full px-5 bg-white rounded-lg py-10 md:shadow-lg">
						<div className="max-w-[650px] mx-auto">
							<div className="aso-bio">
								<div className="bg-[#8B70E94D] w-[90px] h-[90px] md:w-[150px] md:h-[150px] rounded-full overflow-clip mr-[20px]">
									<img src={Avatar} alt="Bio Img" className="w-full h-full" />
								</div>

								<div className="aso-bio-details">
									<h1>{user?.first_name}</h1>
									<p>{user?.email}</p>
								</div>
							</div>
							{errorStatus.message && (
								<div className="my-5 absolute top-[-50px] md:top-0 right-5">
									<ErrorSuccessCard error={errorStatus.error} message={errorStatus.message} />
								</div>
							)}
							<form onSubmit={handleSubmit(onSubmit)} className="aso-form-container">
								<div className="md:grid md:grid-cols-2 gap-5 mb-5">
									<div className="flex flex-col col-span-1 mb-5 md:mb-0">
										<label htmlFor="first_name" className="text-black font-nunito font-medium text-sm lg:text-xl">
											First Name
										</label>
										<input
											name="first_name"
											type="text"
											required
											{...register('first_name', {
												required: true,
											})}
											placeholder="First name"
											className={`border ${
												errors.first_name && 'border-red-600'
											} border-[#121212] py-3 px-4 rounded-md placeholder-[#808080] text-base font-nunito w-full`}
										/>
										{errors.first_name && <span className="text-xs text-red-600">First name required</span>}
									</div>
									{/*  */}
									<div className="flex flex-col col-span-1">
										<label htmlFor="last_name" className="text-black font-nunito font-medium text-sm lg:text-xl">
											Last Name
										</label>
										<input
											name="last_name"
											type="text"
											required
											{...register('last_name', {
												required: true,
											})}
											placeholder="Last name"
											className={`border ${
												errors.last_name && 'border-red-600'
											} border-[#121212] py-3 px-4 rounded-md placeholder-[#808080] text-base font-nunito w-full`}
										/>
										{errors.last_name && <span className="text-xs text-red-600">Last name required</span>}
									</div>
								</div>
								{/*  Location and mobile number */}
								{/* <div className="md:grid md:grid-cols-2 gap-5 mb-5">
									<div className="flex flex-col col-span-1 mb-5 md:mb-0">
										<label htmlFor="mobile" className="text-black font-nunito font-medium text-sm lg:text-xl">
											Mobile Number
										</label>
										<input
											name="mobile"
											type="text"
											required
											{...register('mobile', {
												required: true,
											})}
											placeholder="Mobile Number"
											className={`border ${
												errors.mobile && 'border-red-600'
											} border-[#121212] py-3 px-4 rounded-md placeholder-[#808080] text-base font-nunito font-medium w-full`}
										/>
										{errors.mobile && <span className="text-xs text-red-600">Phone number is required</span>}
									</div>

									<div className="flex flex-col col-span-1">
										<label htmlFor="location" className="text-black font-nunito font-medium text-sm lg:text-xl">
											Location
										</label>
										<input
											name="loation"
											type="text"
											required
											{...register('location', {
												required: true,
											})}
											placeholder="Abuja, Nigeria"
											className={`border ${
												errors.location && 'border-red-600'
											} border-[#121212] py-3 px-4 rounded-md placeholder-[#808080] text-base font-nunito font-medium w-full`}
										/>
										{errors.location && <span className="text-xs text-red-600">Location is required</span>}
									</div>
								</div> */}
								{/*  */}
								<div className="flex flex-col">
									<label htmlFor="email" className="text-black font-nunito font-medium text-sm lg:text-xl">
										Email
									</label>
									<input
										name="email"
										type="email"
										required
										{...register('email', {
											required: true,
											pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
										})}
										placeholder="Email"
										className={`border ${
											errors.email && 'border-red-600'
										} border-[#121212] py-3 px-4 rounded-md placeholder-[#808080] text-base font-nunito font-medium w-full`}
									/>
									{errors.email && <span className="text-xs text-red-600">Email is required</span>}
								</div>

								<div className="mt-10 flex justify-center w-full">
									<Button
										type="submit"
										className="bg-[#8B70E9] text-white font-nunito font-semibold text-lg p-4 rounded-lg"
									>
										{loading ? 'Loading...' : 'Save Changes'}
									</Button>
								</div>
							</form>
						</div>
					</div>
				</section>
			</main>
		</Dashboardlayout>
	);
};

export default Profile;
