import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";
import { loginUser } from "./action";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		userEmail: null,
		token: "",
		loading: false,
		success: false,
		error: false,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loginUser.fulfilled, (state, { payload }) => {
				state.userEmail = JSON.parse(payload.config.data)?.email;
				state.token = payload.data.token;
				state.loading = false;
				state.success = true;
				state.error = false;
			})
			.addMatcher(isPending(...[loginUser]), state => {
				state.loading = true;
				state.error = false;
				state.success = false;
			})

			.addMatcher(isRejected(...[loginUser]), (state, { payload }) => {
				state.loading = false;
				state.error = true;
				state.success = false;
			});
	},
});

// export const { setUser } = userSlice.actions;
export default userSlice.reducer;
