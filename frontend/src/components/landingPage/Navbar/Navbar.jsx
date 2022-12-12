import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/tapart.png';
import menu from '../../../assets/images/menu.png';
import Button from '../Button/Button';
import MobileNav from './MobileNav';
import './nav.css';
import { useContext } from 'react';
import { NavContext, pages } from '../../../../context/nav-context';
import { useAuth } from '../../../../context/auth-context';

const Navbar = () => {
	const [navToggle, setNavToggle] = useState(false);
	const auth = useAuth();
	const navigate = useNavigate();

	const navHandler = () => {
		setNavToggle((navToggle) => !navToggle);
	};
	const navClose = () => {
		setNavToggle(false);
	};

	const handleLogout = () => {
		auth.logout();
		navigate('/');
		console.log('log');
	};

	const {page} = useContext(NavContext);
	
	return (
		<Fragment>
			<nav className="flex justify-between items-center max-w-[100%]  lg:px-16   py-5 cbk-ds-nav">
				<div>
					<Link to="/">
						<img src={logo} alt="" className="w-10 hidden lg:block" />
					</Link>
					<div className="flex justify-between cbk-mobile-board  lg:hidden pr-3">
						<img src={menu} alt="" className=" mx-5 my-1" onClick={navHandler} />
						<Button className="text-white border-[#8B70E9] bg-[#8B70E9] cbk-login-btn">
							<Link to="/login"> Create avatars </Link>
						</Button>
					</div>
				</div>

				<ul className="lg:flex justify-between items-center gap-2  lg:gap-5 hidden cursor-pointer w-1/2 cbk-links">
					<li className="p-2  border-b-white border-b hover:border-opacity-100 hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
						<Link to="/" 
						className={ page === pages.Home ? "text-[#8B70E9]" :"hover:text-[#8B70E9]" }
						
						> Home</Link>
					</li>
					<li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple clamp">
						<Link to="/aboutus" 
						className={ page === pages.AboutUs ? "text-[#8B70E9]" :"hover:text-[#8B70E9]" }
						>About Us</Link>
					</li>
					<li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple clamp">
						<Link to="/pricing" 
						className={ page === pages.Pricing ? "text-[#8B70E9]" :"hover:text-[#8B70E9]" }
						>Pricing</Link>
					</li>
					<li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
						<Link to="/contactus" 
						className={ page === pages.ContactUs ? "text-[#8B70E9]" :"hover:text-[#8B70E9]" }
						>Contact Us</Link>
					</li>
					<li className="p-2 border-b-white border-b hover:text-purple hover:border-b-purple active:border-b-purple active:text-purple">
						<Link to="/faq" 
						className={ page === pages.Faqs ? "text-[#8B70E9]" :"hover:text-[#8B70E9]" }
						>FAQs</Link>
					</li>
				</ul>
				<div className="space-x-6 hidden lg:block">
					{auth.token === null ? (
						<Link to="/login" className='w-full'>
						<Button className=" border-[#8B70E9] text-[#8B70E9] bg-white  cbk-login-btn ">
							 Log in
						</Button>
						</Link>
					) : (
						<span onClick={handleLogout}>
							<Button className=" border-[#8B70E9] text-[#8B70E9] bg-white  cbk-login-btn ">Logout</Button>
						</span>
					)}
                    <Link to="/signup">
					<Button className="text-white border-[#8B70E9] bg-[#8B70E9] cbk-login-btn ">
						 Sign up 
					</Button>
					</Link>
				</div>
			</nav>
			{navToggle && <MobileNav navClose={navClose} />}
		</Fragment>
	);
};

export default Navbar;
