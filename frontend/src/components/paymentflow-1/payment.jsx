import React, { useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import Illus from './images/payment-illus.svg';
import Button from '../landingPage/Button/Button';
import axios from 'axios';
import { useAuth } from '../../../context/auth-context';
import { usePaystackPayment } from 'react-paystack';
import Swal from 'sweetalert2';

const Payment = ({ details, setShowPayment }) => {
	const { user } = useAuth();
	const [loading, setLoading] = useState(false);
	const [modal, setModal] = useState(false);
	const [config, setConfig] = useState({
		name: user?.first_name,
		email: user?.email,
		amount: Number(details.amount) * 650 * 100,
		currency: 'NGN',
		publicKey: import.meta.env.VITE_PAYSTACK_PK,
	});

	const url = `${import.meta.env.VITE_API_URL}/verify_transaction`;
	const verifyPayment = async (reference) => {
		setLoading(true);
		const data = {
			trans_ref: reference,
			email: user?.email,
		};
		await axios
			.post(url, data)
			.then((response) => {
				console.log(response, 'response');
				Swal.fire('Payment verified successfully', '', 'success');
				setLoading(false);
			})
			.catch((e) => {
				setLoading(false);
				Swal.fire('Payment could not be verified', '', 'error');
				const err = e?.response?.data?.detail;
				console.log(err);
			});
	};

	const onSuccess = (data) => {
		verifyPayment(data.reference);
	};

	const onClose = () => {
		console.log('closed');
	};

	const initializePayment = usePaystackPayment(config);

	return (
		<>
			<div className="max-w-[1240px] mx-auto font-nunito mt-[40px] px-5 pb-10 bg-white">
				<div onClick={() => setShowPayment(false)} className="cursor-pointer mb-10 font-bold text-base">
					{'< Back'}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[#595959]">
					<div className="col-span-1 md:max-w-[407px]">
						<div className="mb-10 hidden md:block">
							<img src={Illus} alt="illustration" />
						</div>
						<p className="text-base font-bold hidden md:block">
							4K avatars are 4096x4096. AI can have random results and may include artistic nudes, erotic or otherwise
							shocking images, if you do not want that and are sensitive, we recommend you to NOT use this site!
						</p>
					</div>

					{/* Payment form */}
					<div className="col-span-1 text-[#333333] flex flex-col justify-center items-center">
						<div className="mb-10 max-w-fit mx-auto md:mx-0 ">
							<h1 className="font-bold text-base mb-[5px]">{details?.title}</h1>
							<p className="">
								<span className="text-[32px] text-[#333333]">${details?.amount}</span>
								<span className="text-base capitalize"> / Per {details?.duration}</span>
							</p>
						</div>
						<div
							className="flex flex-col justify-center"
							onClick={() => {
								initializePayment(onSuccess, onClose);
							}}
						>
							<Button
								type="submit"
								className={`bg-[#8B70E9] text-white font-nunito font-extrabold text-base px-4 py-4 md:py-5 rounded-lg mb-6 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
								
							>
								{loading ? 'Verifying payment...' : 'Pay With Paystack'}
							</Button>
							<p className="text-center text-[#262626] md:font-bold text-xs md:text-base">
								By confirming your subscription, you allow Zuvatar, Inc. to charge your card for this payment in
								accordance with their terms. You can always cancel your subscription.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Payment;
