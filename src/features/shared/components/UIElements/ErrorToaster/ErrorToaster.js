import { Alert, Button } from "antd";
import React from "react";

function ErrorToaster({
	error = false,
	onClose = () => {},
	message = "Something went wrong!",
	type = "error",
	loading = false,
	onReload = () => {},
}) {
	if (error) {
		return (
			<Alert
				className="w-[30%] absolute right-0 top-12 left-0 ml-auto mr-auto bg-[#FFF2F0] "
				message={message}
				type={type}
				// closable
				showIcon
				onClose={onClose}
				action={
					<Button
						size="small"
						type="primary"
						danger
						loading={loading}
						onClick={onReload}
					>
						Reload
					</Button>
				}
			/>
		);
	}
}

export default ErrorToaster;
