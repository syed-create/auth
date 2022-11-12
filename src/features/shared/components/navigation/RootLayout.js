import React from "react";
import ProtectedRoutes from "../../../../routes/ProtectedRoutes";
import Layout from "../UIElements/Layout/Layout";
import Header from "./Header";

function RootLayout() {
	return (
		<div className="h-screen">
			<Header />
			<Layout>
				<ProtectedRoutes />
			</Layout>
		</div>
	);
}

export default RootLayout;
