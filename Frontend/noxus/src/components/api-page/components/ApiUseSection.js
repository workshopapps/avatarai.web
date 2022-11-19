import React from 'react';

const ApiUseSection = () => {
	return (
		<div className="w-full py-20">
			<div className="max-w-[1240px] mx-auto px-5">
				<div className="flex justify-between">
					<h2 className="text-[#333333] text-[2rem] font-bold max-w-[595px]">
						Utilize our API and customize avatars suitable for use anywhere and anytime
					</h2>
					<p className="text-[#605E65] font-medium text-base max-w-[495px]">
						Connecting to Nexus API is extremely simple. The actual complex mechanics are implemented on our servers.
						You’ll just need to connect your app with the server by using an online API as detailed in the following
						manual:
					</p>
				</div>

				<div className=" flex justify-between gap-10 mt-10">
					<div className="max-w-[423px]">
						<div className="mb-[24px]">
							<img src="/api-page-images/pencil.svg" alt="pencil" className="mb-[6px]" />
							<p className="text-[#333333] text-base font-bold mb-[6px]">Create a sandbox account</p>
							<p className="text-[#605E65]">
								test our service using your sandbox account and customize our API using your persoanla brand colours
							</p>
						</div>
						<div className=" mb-[24px]">
							<img src="/api-page-images/pencil.svg" alt="pencil" className="mb-[6px]" />
							<p className="text-[#333333] text-base font-bold mb-[6px]">Quick set up</p>
							<p className="text-[#605E65]">
								An outstanding developer experience is guaranteed with clear coding examples and comprehensive API
								documentation.
							</p>
						</div>
						<div className="">
							<img src="/api-page-images/pencil.svg" alt="pencil" className="mb-[6px]" />
							<p className="text-[#333333] text-base font-bold mb-[6px]">Upload Images!</p>
							<p className="text-[#605E65]">
								Upload a maximum of ten images in our system and watch it generate avatars with wonderful scenes that
								you will absolutely love to share
							</p>
						</div>
					</div>

					<div className="max-w-[780px]">
						<img src="/api-page-images/style-demo.svg" alt="Style demo" className="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApiUseSection;
