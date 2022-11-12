import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "../store/action";
import { tableColumns } from "./utils/tableColumns";
import Title from "../../shared/components/UIElements/Title/Title";
import ErrorToaster from "../../shared/components/UIElements/ErrorToaster/ErrorToaster";

function Dashboard() {
	const dispatch = useDispatch();
	const usersData = useSelector(state => state.dashboardSlice.users);
	const error = useSelector(state => state.dashboardSlice.error);
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
		<div className="p-5">
			<ErrorToaster
				onReload={() => {
					dispatch(getUsers());
				}}
				error={error}
			/>
			<Title
				className="my-[20px] text-center"
				text={"Welcome to Dashboard"}
			/>

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
