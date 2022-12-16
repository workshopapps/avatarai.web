import React from 'react';
import './header.css';
import Hero from './img/Hero1.png';
import { Link } from 'react-router-dom';
import Button from '../../../landingPage/Button/Button';

const Header = () => {
	return (
		<header className="bat-header">
			<div className="bat-header-content max-w-[761px]">
				<h2>
					Create your own <span>AI-generated </span>avatars
				</h2>
				<p className='max-w-[569px]'>Create profile pictures, online gaming display pictures, pet portraits and much more on the go.</p>
				<Link to="/dashboard">
					<Button className="text-white border-[#8B70E9] bg-[#8B70E9] mt-6 md:mt-10 font-bold text-base md:text-[18px]">Generate Avatars</Button>
				</Link>
			</div>
			<div className="bat-header-overlay"></div>
		</header>
	);
};
export default Header;
