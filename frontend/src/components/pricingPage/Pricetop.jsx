import React from "react";

export default function Pricetop() {
  return (
		<>
			<div className="text-center mt-4 ">
				<h1 className="text-[#333333] text-[24px] md:text-6xl mx-auto md:w-4/6 font-jakarta font-bold px-3">
					Pick a <span className="text-[#8B70E9]"> plan </span> and create your{' '}
					<span className="text-[#8B70E9]"> AI generated Avatars </span>
				</h1>
				<p className="text-[#778888] md:w-[38rem] w-5/6 mb-4 md:mb-8 mx-auto text-sm md:text-lg font-semibold font-nunito pt-4">
					Select from our basic, standard or premium plan to access a wide range of our services. We'll send you an
					email with a link to 100+ different AI avatars of your face when it's done!
				</p>
			</div>
		</>
	);
}
