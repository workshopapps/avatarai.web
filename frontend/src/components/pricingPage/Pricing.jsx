import './styling.css';

import { Faq } from './Faq';
import FaqNewsletter from '../faq/FaqNewsletter';
import Foooter from '../footer/Foooter';
import Navbar from '../landingPage/Navbar/Navbar';
import Pricetop from './Pricetop';
import React from 'react';
import Sponsors from './Sponsors';
import TotalPriceCards from './TotalPriceCards';
import { useContext, useEffect } from 'react';
import { NavContext, pages } from '../../../context/nav-context';
import { useState } from 'react';
import Payment from '../paymentflow-1/payment';
// import Footer from "../Footerpage/Footer";

function Pricing() {
	const { setPage } = useContext(NavContext);
	const [showPayment, setShowPayment] = useState(false);
	const [details, setDetails] = useState({
		title: '',
		amount: '',
		duration: '',
	});

	useEffect(() => {
		if (details.title) {
			setShowPayment(true);
		}
	}, [details]);
	return (
		<section className="price-top">
			<Navbar />
			<div className="overflow-x-hidden">
				{!showPayment ? (
					<>
						<Pricetop />
						<TotalPriceCards setShowPayment={setShowPayment} setDetails={setDetails} />
					</>
				) : (
					<Payment details={details} setShowPayment={setShowPayment} />
				)}
			</div>
			<FaqNewsletter />
			<Foooter />
		</section>
	);
}

export default Pricing;
