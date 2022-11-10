import React from "react";
import { ValidateEmail, ValidatePassword } from "../../../shared/validation";
import { Button, Form, Input } from "antd";

function LoginForm({ onFormSubmit = () => {}, loading = false }) {
	return (
		<Form className="" layout="vertical" onFinish={onFormSubmit}>
			<Form.Item
				label="Email"
				name="email"
				rules={[
					{
						required: true,
						validator: ValidateEmail,
					},
				]}
			>
				<Input placeholder="Enter user email" type="email" />
			</Form.Item>
			<Form.Item
				label="Password"
				name="password"
				rules={[
					{
						required: true,
						validator: ValidatePassword,
					},
				]}
			>
				<Input placeholder="Enter password" type="password" />
			</Form.Item>
			<Form.Item className="flex justify-center">
				<Button
					className="!bg-[#1890ff] hover:scale-110 hover:!bg-opacity-80 !flex !items-center"
					type="primary"
					htmlType="submit"
					loading={loading}
				>
					Login
				</Button>
			</Form.Item>
		</Form>
	);
}

export default LoginForm;
