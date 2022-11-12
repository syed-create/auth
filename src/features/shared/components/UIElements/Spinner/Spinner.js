import { Spin } from "antd";
import React from "react";

function Spinner() {
	return (
		<div className="flex justify-center h-screen items-center">
			<Spin size="large" />
		</div>
	);
}

export default Spinner;
