import React from "react";
import { ValidateEmail, ValidatePassword } from "../../../shared/validation";
import { Button, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

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
				<Input
					prefix={<MailOutlined className="text-[#00000040]" />}
					placeholder="Enter user email"
					type="email"
				/>
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
				<Input.Password
					prefix={<LockOutlined className="text-[#00000040]" />}
					placeholder="Enter password"
				/>
			</Form.Item>
			<Form.Item className="">
				<Button
					className="!border-purple-500 hover:!from-purple-600 !transition-all hover:!to-pink-600 hover:!bg-opacity-80 !rounded-3xl !bg-gradient-to-r from-purple-500 to-pink-500"
					type="primary"
					htmlType="submit"
					loading={loading}
					block
				>
					Login
				</Button>
			</Form.Item>
		</Form>
	);
}

export default LoginForm;
