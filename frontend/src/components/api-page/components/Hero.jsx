import hero from '../images/hero.svg';

const Hero = () => {
	return (
		<div className="w-full">
			<div
				style={{
					background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${hero})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
				className="px-5 w-full"
			>
				<div className="flex lg:flex-row flex-col lg:items-center lg:justify-between max-w-[1240px] mx-auto py-10 min-h-[660px] justify-center">
					<div className="max-w-[824px]">
						<h1 className="text-[#3BC489] font-bold text-base mb-[32px]">API INTEGRATION</h1>
						<p className="text-[#F3F0FF] font-bold text-[36px] mb-[32px]">
							Integrate our API and easily <span className="text-[#B5BFF3]">generate custom avatars</span> and
							illustration{' '}
						</p>
						<p className="text-[#ffffff] text-[16px] mb-[32px]">
							Noxus APIs make it easy to integrate and generate custom illustrations into your app or website.
						</p>
						<button className="px-[26px] py-[12px] outline-none normal-case border-none rounded-lg bg-[#8B70E9] text-[#ffffff]">
							API free trial
						</button>
					</div>
					<div className="flex flex-row justify-end lg:flex-col gap-3 md:gap-5 lg:gap-0 mt-10 lg:mt-0">
						<div>
							<p className="font-bold text-[30px] md:text-[64px] text-[#ffffff]">3 Mil</p>
							<p className="text-[#3BC489] font-bold text-[12px] md:text-base lg:mb-[32px]">API TRANSACTIONS</p>
						</div>
						<div>
							<p className="font-bold text-[30px] md:text-[64px] text-[#ffffff]">2 Hrs</p>
							<p className="text-[#3BC489] font-bold text-[12px] md:text-base lg:mb-[32px]">INTEGRATION TIME</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
