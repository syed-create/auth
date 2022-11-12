import React from "react";

function Title({ text, className }) {
	return <h1 className={`text-4xl font-bold ${className}`}>{text}</h1>;
}

export default Title;
