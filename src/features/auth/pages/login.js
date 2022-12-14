import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import useAuth from "../../../shared/useAuth";
import { loginUser } from "../store/action";

function Login() {
	const dispath = useDispatch();
	const isLoggedIn = useAuth();
	useEffect(() => {
		// dispath(
		// 	loginUser({
		// 		email: "eve.holt@reqres.in",
		// 		password: "cityslicka",
		// 	})
		// );
	}, []);

	if (isLoggedIn) {
		return <Navigate to={"/dashboard"} />;
	}

	return (
		<div>
			<Form>
				<Form.Item label="Email" name="email">
					<Input />
				</Form.Item>
				<Form.Item label="Password" name="password">
					<Input />
				</Form.Item>
				<Button>Login</Button>
			</Form>
		</div>
	);
}

export default Login;
