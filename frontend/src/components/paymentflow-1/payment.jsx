import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Illus from './images/payment-illus.svg';
import { useForm } from 'react-hook-form';
import Navbar from '../landingPage/Navbar/Navbar';
import Button from '../landingPage/Button/Button';
import Foooter from '../footer/Foooter';

const payment = () => {
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data, 'payment');
	};

	return (
		<>
			<Navbar />
			<div className="max-w-[1240px] mx-auto font-nunito mt-10 md:mt-[80px] px-5 pb-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[#595959]">
					<div className="col-span-1 md:max-w-[407px]">
						<div className="mb-10 max-w-fit mx-auto md:mx-0 ">
							<h1 className="font-bold text-base mb-[5px]">Premium</h1>
							<p className="">
								<span className="text-[32px] text-[#333333]">$45</span>
								<span className="text-base"> / Per Month</span>
							</p>
							<Link to="#" className="text-[#8B70E9] text-base md:hidden">
								View details
							</Link>
						</div>

						<div className="mb-10 hidden md:block">
							<img src={Illus} alt="illustration" />
						</div>
						<p className="text-base font-bold hidden md:block">
							4K avatars are 4096x4096. AI can have random results and may include artistic nudes, erotic or otherwise
							shocking images, if you do not want that and are sensitive, we recommend you to NOT use this site!
						</p>
					</div>

					{/* Payment form */}
					<div className="col-span-1 text-[#333333]">
						<form onSubmit={handleSubmit(onSubmit)}>
							<h1 className="md:font-bold text-base mb-[24px]">Enter payment details</h1>
							<div>
								<div className="mb-[24px]">
									<label htmlFor="email" className="md:font-bold text-base">
										Email
									</label>
									<input
										type="text"
										name="email"
										placeholder="johndoe@gmail.com"
										className={`border ${
											errors.email && 'border-red-600'
										} border-[#403E46] py-3 px-4 rounded-[4px] placeholder-[#808080] text-base font-medium w-full`}
										{...register('email', {
											required: true,
											pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
										})}
									/>
									{errors.username && <span className="text-xs text-red-600">Please enter a valid email address</span>}
								</div>

								<div className="mb-[24px]">
									<label htmlFor="cardNumber" className="md:font-bold text-base">
										Card Number
									</label>
									<input
										type="text"
										name="cardNumber"
										placeholder="1234 1234 1234 1234"
										className={`border ${
											errors.cardNumber && 'border-red-600'
										} border-[#403E46] py-3 px-4 rounded-[4px] placeholder-[#808080] text-base font-medium w-full`}
										{...register('cardNumber', {
											required: true,
										})}
									/>
									{errors.cardNumber && <span className="text-xs text-red-600">Card number is required</span>}
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div className="mb-[24px] col-span-1">
										<label htmlFor="expDate" className="md:font-bold text-base">
											Expiration Date
										</label>
										<input
											type="text"
											name="expDate"
											placeholder="MM/YY"
											className={`border ${
												errors.expDate && 'border-red-600'
											} border-[#403E46] py-3 px-4 rounded-[4px] placeholder-[#808080] text-base font-medium w-full`}
											{...register('expDate', {
												required: true,
											})}
										/>
										{errors.expDate && <span className="text-xs text-red-600">Expiration date is required</span>}
									</div>

									<div className="mb-[24px] col-span-1">
										<label htmlFor="cvv" className="md:font-bold text-base">
											CVV
										</label>
										<input
											type="text"
											name="cvv"
											placeholder="123"
											className={`border ${
												errors.cvv && 'border-red-600'
											} border-[#403E46] py-3 px-4 rounded-[4px] placeholder-[#808080] text-base font-medium w-full`}
											{...register('cvv', {
												required: true,
												max: 3,
											})}
										/>
										{errors.cvv && <span className="text-xs text-red-600">CVV is required</span>}
									</div>
								</div>
								<div className="mb-10">
									<label htmlFor="saveDetails" className="text-[#919191] text-base md:font-bold flex items-center">
										<input
											type="checkbox"
											name="saveDetails"
											className="mr-4 w-4 h-4"
											{...register('saveDetails', {
												required: false,
											})}
										/>
										<span>Save card details</span>
									</label>
								</div>

								<div>
									<Button
										type="submit"
										className="bg-[#8B70E9] text-white font-nunito font-bold text-sm p-4 rounded-[4px] mb-6 w-full"
									>
										{loading ? 'Loading...' : 'Subscribe'}
									</Button>
									<p className="text-center text-[#262626] font-bold text-base">
										By confirming your subscription, you allow Generated Media, Inc. to charge your card for this
										payment and future payments in accordance with their terms. You can always cancel your subscription.
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			{/* <Foooter /> */}
		</>
	);
};

export default payment;
