import React, { useState } from 'react';
import ArrowDown from './img/arrowdown.svg';
import './instruct.css';
import ArrowUp from './img/ArrowUp.svg';

const InstructionModal = () => {
	const [modal, showModal] = useState(true);
	const showUp = () => {
		showModal((modal) => !modal);
	};
	return (
		<>
			<div className="flex items-center gap-3 mb-5" onClick={showUp}>
				<p className="text-[#000] text-sm md:text-[20px] font-bold">Read upload instructions</p>
				<img src={`${modal ? ArrowDown : ArrowUp}`} alt="arrow-down" />
			</div>

			<ul className={`grid grid-cols-2 list-outside list-disc my-5 p-3 max-w-[700px] rounded-lg shadow-lg gap-5 bg-[#fff] ${modal ? 'hide' : ''}`}>
				<div className="col-span-1 pl-3">
					<li >Image Size should be 512 x 512px </li>
					<li>Photos with different expressions</li>
					<li>Look into the camera and also away</li>
					<li>No other people in your photos</li>
					<li>Photos at different time of the day</li>
				</div>
				<div className="col-span-1">
					<li>For couple photos, make sure every photo has both of you in it</li>
					<li>No duplicate photos</li>
					<li>No black and white photos</li>
					<li>No photo shoots</li>
					<li>Not only selfies</li>
				</div>

				{/* <div>
          <p className="text-sm my-1.5">✅ No other people in your photos</p>
          <p className="text-sm my-1.5">✅ Photos with different expression</p>
          <p className="text-sm my-1.5">
            ✅ Photos in different locations, backgrounds and angles
          </p>
          <p className="text-sm my-1.5">✅ Only images - 512x512px</p>
          <p className="text-sm my-1.5">✅ Photos at different times of day</p>
          <p className="text-sm my-1.5">
            ✅ Look into the camera and also away
          </p>
          <p className="text-sm my-1.5">
            ✅ If couple, make sure EVERY photo has BOTH of you in it
          </p>
        </div> */}
				{/* <div>
          <p className="text-sm my-1.5">❌ No duplicate photos</p>
          <p className="text-sm my-1.5">❌ No black and white photos</p>
          <p className="text-sm my-1.5">❌ No photo shoots</p>
          <p className="text-sm my-1.5">❌ Not only selfies</p>
          <p className="text-sm my-1.5">❌ No children</p>
          <p className="text-sm my-1.5">❌ No nudes</p>
        </div> */}
			</ul>
		</>
	);
};

export default InstructionModal;
