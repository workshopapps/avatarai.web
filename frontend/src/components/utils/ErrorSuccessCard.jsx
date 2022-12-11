import React from 'react';

const ErrorSuccessCard = ({ error, message }) => {
	return (
		<div
			className={`alert transform duration-500 ${
				!error ? 'bg-white border-green-600 text-green-600' : 'bg-white border-red-600 text-red-600'
			} shadow-md border mb-5`}
		>
			<div>
				{!error ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="stroke-green-600 flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="stroke-red-600 flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				)}

				<span className={!error ? 'text-green-600' : 'text-red-600'}>{message}</span>
			</div>
		</div>
	);
};

export default ErrorSuccessCard;
