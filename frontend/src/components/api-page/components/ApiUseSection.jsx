// import { Link } from 'react-router-dom';
import useCase1 from '../images/usecase1.svg';
import useCase2 from '../images/usecase2.svg';
import useCase3 from '../images/usecase3.svg';
import useCase4 from '../images/usecase4.svg';
import pencil from '../images/pencil.svg';
import styleDemo from '../images/style-demo.svg';

const useCases = [
	{
		text: 'You can use it anywhere: in your mobile and desktop apps',
		color: '#F3F0FF',
		image: useCase1,
	},
	{
		text: 'Integrate our API and easily generate custom avatars and illustration ',
		color: '#FBF6DC',
		image: useCase2,
	},
	{
		text: 'Integrate our API and easily share on social media',
		color: '#E7F8F1',
		image: useCase3,
	},
	{
		text: 'Integrate our API and easily generate custom avatars and illustration ',
		color: '#D2D8F8',
		image: useCase4,
	},
];

const ApiUseSection = () => {
	return (
		<div className="w-full py-20">
			<div className="max-w-[1240px] mx-auto px-5">
				<div className="flex flex-col md:flex-row gap-5 md:justify-between">
					<h2 className="text-[#333333] text-[1.5rem] md:text-[2rem] font-bold max-w-[595px]">
						Utilize our API and customize avatars suitable for use anywhere and anytime
					</h2>
					<p className="text-[#605E65] font-medium text-base max-w-[495px]">
						Connecting to Nexus API is extremely simple. The actual complex mechanics are implemented on our servers.
						You’ll just need to connect your app with the server by using an online API as detailed in the following
						manual:
					</p>
				</div>

				<div className=" flex flex-col md:flex-row md:justify-between gap-10 mt-10">
					<div className="max-w-[423px]">
						<div className="mb-[24px]">
							<img src={pencil} alt="pencil" className="mb-[6px]" />
							<p className="text-[#333333] text-base font-bold mb-[6px]">Create a sandbox account</p>
							<p className="text-[#605E65]">
								test our service using your sandbox account and customize our API using your persoanla brand colours
							</p>
						</div>
						<div className=" mb-[24px]">
							<img src={pencil} alt="pencil" className="mb-[6px]" />
							<p className="text-[#333333] text-base font-bold mb-[6px]">Quick set up</p>
							<p className="text-[#605E65]">
								An outstanding developer experience is guaranteed with clear coding examples and comprehensive API
								documentation.
							</p>
						</div>
						<div className="">
							<img src={pencil} alt="pencil" className="mb-[6px]" />
							<p className="text-[#333333] text-base font-bold mb-[6px]">Upload Images!</p>
							<p className="text-[#605E65]">
								Upload a maximum of ten images in our system and watch it generate avatars with wonderful scenes that
								you will absolutely love to share
							</p>
						</div>
					</div>

					<div className="max-w-[780px]">
						<img src={styleDemo} alt="Style demo" className="" />
					</div>
				</div>

				<div className="pt-[133px]">
					<h3 className="text-[#333333] text-center font-bold text-[1.5rem] md:text-[2rem] mb-[65px]">
						Use cases for our API
					</h3>
					<div className="grid grid-cols-12 gap-3">
						{useCases.map((item, i) => {
							return (
								<div
									key={i}
									className="md:col-span-6 col-span-12 py-[20px] px-[31px] rounded-lg border border-[#8B70E9] relative min-h-[309px] flex flex-col justify-between"
									style={{ backgroundColor: item.color }}
								>
									<p className="font-bold text-[1.5rem] mb-[20px] max-w-[426px]">{item.text}</p>

									<img
										src={item.image}
										alt="use Case"
										className="absolute right-[30px] md:right-[55px] bottom-[30px] w-[80px] md:w-auto"
									/>

									<a href="#" className="text-[18px] underline text-[#333333]">
										Learn more
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApiUseSection;
