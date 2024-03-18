export const PrimaryButton = ({ text, className, onClick, type, disabled }) => {
	return (
		<div>
			<button
				disabled={disabled}
				type={type}
				onClick={onClick}
				className={` py-3 px-4 whitespace-nowrap text-white rounded bg-[#3443cd] font-medium md:py-[0.86rem] md:px-6 hover:shadow-md transition-all ease-in cursor-pointer ${className} ${
					disabled ? "bg-gray" : ""
				}`}
			>
				{text}
			</button>
		</div>
	);
};

export const SecondaryButton = ({ text, className, onClick }) => {
	return (
		<div>
			<button
				onClick={onClick}
				className={` py-3 rounded px-4 whitespace-nowrap  bg-transparent border border-[#3443cd] text-[#3443cd] font-medium md:py-[0.86rem] md:px-6 hover:shadow-md cursor-pointer transition-all ease-in ${className}`}
			>
				{text}
			</button>
		</div>
	);
};
