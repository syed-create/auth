import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../shared/useAuth";
function ProtectedRoutes() {
	const isLoggedIn = useAuth();
	if (isLoggedIn) {
		return <Outlet />;
	}
	return (
		<Navigate
			to={{
				pathname: "/login",
			}}
		/>
	);
}

export default ProtectedRoutes;
