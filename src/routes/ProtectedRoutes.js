import React from "react";
import useAuth from "../shared/useAuth";
// protected routes
function ProtectedRoutes() {
	const isLoggedIn = useAuth();
	console.log("isadsfadsfasd", isLoggedIn);
	return <div>ProtectedRoutes</div>;
}

export default ProtectedRoutes;
