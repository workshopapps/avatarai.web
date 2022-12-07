import React, { useState } from 'react';
// import Sidebar from '../DASHBOARD_COMPONENT/Sidebar';
// import Dashboardtranslate from '../DASHBOARD_COMPONENT/dashboardtranslate';
import Dashboardlayout from '../DASHBOARD_COMPONENT/DashboardLayout';
import ProfileImg from './Profile.jpeg';
import './Profile.css';
import Button from '../landingPage/Button/Button';

const Profile = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [mobile, setMobile] = useState('');
	const [location, setLocation] = useState('');
	const [email, setEmail] = useState('');

	const user = JSON.parse(localStorage.getItem("userData"));

	const clearValue = () => {
		setFirstName('');
		setLastName('');
		setEmail('');
		setMessage('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		clearValue();
	};

	return (
		<Dashboardlayout title="Profile" text="See your personal information">
			<main className="aso-profile">
				<section className="aso-profile-section">
					
					<div className="aso-profile-board">
						<div className="aso-bio">
							<img src={ProfileImg} alt="Bio Img" className="" />
							<div className="aso-bio-details">
								<h1>{user?.username}</h1>
								<p>{user?.email}</p>
							</div>
						</div>
						<form className="aso-form-container">
							<div className="aso-form-name-input">
								<div className="aso-form-first-name">
									<label htmlFor="first_name">First name</label>
									<input
										type="text"
										id="first_name"
										value={firstName}
										placeholder="Eddie"
										onChange={(e) => {
											setFirstName(e.target.value);
										}}
									/>
								</div>
								{/*  */}
								<div className="aso-form-last-name">
									<label htmlFor="last_name">Last name</label>
									<input
										type="text"
										id="last_name"
										value={lastName}
										onChange={(e) => {
											setLastName(e.target.value);
										}}
									/>
								</div>
							</div>
							{/*  */}
							{/*  */}
							<div className="aso-form-mobile-location">
								<div className="aso-form-mobile">
									<label htmlFor="mobile">Mobile Number</label>
									<input
										type="text"
										id="mobile"
										value={mobile}
										placeholder="+2349078985443"
										onChange={(e) => {
											setMobile(e.target.value);
										}}
									/>
								</div>
								{/*  */}
								<div className="aso-form-location">
									<label htmlFor="location">Location</label>
									<input
										type="text"
										id="location"
										value={location}
										placeholder="Abuja, Nigeria"
										onChange={(e) => {
											setLocation(e.target.value);
										}}
									/>
								</div>
							</div>
							{/*  */}
							{/*  */}
							<div className="aso-form-email-input">
								<label htmlFor="aso-email">Email</label>
								<input
									type="email"
									id="aso-email"
									value={email}
									placeholder="eddie@gmail.com"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</div>

							<Button type="submit" className="bg-[#8b70e9] aso-btn__submit" onClick={handleSubmit}>
								Save Changes
							</Button>
						</form>
					</div>
				</section>
			</main>
		</Dashboardlayout>
	);
};

export default Profile;
