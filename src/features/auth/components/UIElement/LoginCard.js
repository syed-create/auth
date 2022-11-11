import React from "react";

function LoginCard({ children, className }) {
	return (
		<div
			className={
				"border rounded-lg p-3 shadow-lg hover:shadow-2xl transition-all w-[80%] md:w-[40%] lg:w-[30%] xl:w-[25%] bg-white  " +
				className
			}
		>
			{children}
		</div>
	);
}

export default LoginCard;
