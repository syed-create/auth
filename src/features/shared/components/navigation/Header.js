import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { logout } from "../../../../utils/base";

function Header() {
	const userEmail = useSelector(state => state.userSlice.userEmail);
	return (
		<div className="px-4 py-2 flex gap-5 justify-end items-center">
			<span className="hover:underline text-blue-400 cursor-pointer">
				{userEmail}
			</span>
			<Button onClick={logout} type="primary" danger>
				Logout
			</Button>
		</div>
	);
}

export default Header;
