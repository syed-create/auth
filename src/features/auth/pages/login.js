import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import useAuth from "../../../shared/useAuth";
import LoginCard from "../components/UIElement/LoginCard";
import { loginUser } from "../store/action";
import LoginForm from "./loginForm";

function Login() {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.userSlice.loading);
	const isLoggedIn = useAuth();

	if (isLoggedIn) {
		return <Navigate to={"/dashboard"} />;
	}

	const onFormSubmit = values => {
		dispatch(loginUser({ ...values }));
	};

	return (
		<div className="h-screen w-full flex flex-col gap-3 justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
			<h1 className="font-bold text-3xl">Login</h1>
			<LoginCard>
				<LoginForm onFormSubmit={onFormSubmit} loading={loading} />
			</LoginCard>
		</div>
	);
}

export default Login;
