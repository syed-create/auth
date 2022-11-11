import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "../store/action";
import { tableColumns } from "./utils/tableColumns";

function Dashboard() {
	const dispatch = useDispatch();
	const usersData = useSelector(state => state.dashboardSlice.users);
	const loading = useSelector(state => state.dashboardSlice.loading);
	useEffect(() => {
		if (!usersData) {
			const promise = dispatch(getUsers());
			return () => {
				promise.abort();
			};
		}
	}, [dispatch, usersData]);

	return (
		<div className=" p-5">
			<h1 className="text-4xl font-bold my-[20px] text-center">
				Welcome to Dashboard
			</h1>
			<div className="block">
				<Table
					key={0}
					columns={tableColumns()}
					dataSource={usersData || []}
					loading={loading}
				/>
			</div>
		</div>
	);
}

export default Dashboard;
