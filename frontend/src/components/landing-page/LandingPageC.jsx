import React from 'react';
import Main from './main/Main';
import CTA from './cta/Cta';
import Benefits from './benefits/Benefits';
import About from './about/About';
import Social from './socialproof/SocialProof';
import Header from './header/header/Header';
import Navbar from '../landingPage/Navbar/Navbar';
import QuestionSection from './question/questionsection.jsx';
import Any from './Any/any.jsx';
import FaqNewsletter from '../faq/FaqNewsletter.jsx';
import Foooter from '../footer/Foooter';
import Learn from './learn/learn.jsx';
import Top from './Top/top.jsx';
import Final from './final/final';
import { useContext } from 'react';
import { NavContext, pages } from '../../../context/nav-context';
import { useEffect, useState } from 'react';
import Cookies from '../cookies/cookies.component';
// import Footer from "../Footerpage/Footer.jsx";

function LandingPageC() {
	const [show, setShow] = React.useState(true);
	const [preview, setPreview] = React.useState(true);
	const [cookiesShowing, setCookiesShowing] = useState(true);
	const [isCookiesReady, setIsCookiesReady] = useState(false);

	useEffect(() => {
		let interval = setInterval(() => {
			// First check, if localStorage is supported.
			if (window.localStorage) {
				// Get the expiration date of the previous popup.
				let nextPopup = localStorage.getItem('cookies');

				if (nextPopup > new Date()) {
					return;
				}

				// Store the expiration date of the current popup in localStorage.
				let expires = new Date();
				expires = expires.setHours(expires.getHours() + 24);

				localStorage.setItem('cookies', expires);
			}

			setIsCookiesReady(true);
		}, 2000);
	}, []);

	const offCookies = () => {
		setCookiesShowing(false);
	};
	React.useEffect(() => {
		let timeout;
		timeout = setTimeout(() => {
			setShow((current) => !current);
			setPreview(false);
		}, 5000);
		return () => clearTimeout(timeout);
	});

	const { setPage } = useContext(NavContext);

	useEffect(() => {
		setPage(pages.Home);
	}, []);
	return (
		<div>
			<Navbar />
			<Header />
			<div className="max-w-[1400px] mx-auto">
				<Any />
				<Main />
				<CTA />
				{/* <Benefits /> */}
				{/* <Social />
        <Learn/>
        <Top/>
        <Final/> */}
				<QuestionSection />
				{isCookiesReady ? cookiesShowing ? <Cookies offCookies={offCookies}></Cookies> : '' : ''}
			</div>

			<FaqNewsletter />
			<Foooter />
		</div>
	);
}

export default LandingPageC;
