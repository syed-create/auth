import { Axios } from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/action";

function Dashboard() {
	const dispatch = useDispatch();
	const usersData = useSelector(state => state.dashboardSlice.users);
	useEffect(() => {
		if (!usersData) {
			dispatch(getUsers());
		}
	}, []);
	console.log("usersData", usersData);
	return <div>Welcome to dashboard</div>;
}

export default Dashboard;
