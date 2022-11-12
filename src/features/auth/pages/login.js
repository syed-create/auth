import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import useAuth from "../../shared/hooks/useAuth";
import Title from "../../shared/components/UIElements/Title/Title";
import Card from "../../shared/components/UIElements/Card/Card";
import { loginUser } from "../store/action";
import LoginForm from "../components/LoginForm";

function Login() {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.userSlice.loading);
	const isLoggedIn = useAuth();

	if (isLoggedIn) {
		return <Navigate to={"/dashboard"} />;
	}
	const onFormSubmit = values => {
		dispatch(loginUser(values));
	};
	return (
		<div className="h-screen w-full flex flex-col gap-3 justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
			<Title text={"Login"} />
			<Card>
				<LoginForm onFormSubmit={onFormSubmit} loading={loading} />
			</Card>
		</div>
	);
}

export default Login;
