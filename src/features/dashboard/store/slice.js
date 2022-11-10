import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";
import { getUsers } from "./action";

export const dashboardSlice = createSlice({
	name: "dashboard",
	initialState: {
		users: null,
		loading: false,
		success: false,
		error: false,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getUsers.fulfilled, (state, { payload }) => {
				state.users = payload.data;
				state.loading = false;
				state.success = true;
				state.error = false;
			})
			.addMatcher(isPending(...[getUsers]), state => {
				state.loading = true;
				state.error = false;
				state.success = false;
			})

			.addMatcher(isRejected(...[getUsers]), (state, { payload }) => {
				state.loading = false;
				state.error = true;
				state.success = false;
			});
	},
});

export default dashboardSlice.reducer;
