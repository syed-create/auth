import React from "react";
import ProtectedRoutes from "../../../../routes/ProtectedRoutes";
import Header from "./Header";

function RootLayout() {
	return (
		<div>
			<Header />
			<ProtectedRoutes />
		</div>
	);
}

export default RootLayout;
