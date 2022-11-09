import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";
import { loginUser } from "./action";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		token: "",
		loading: false,
		success: false,
		error: false,
	},
	reducers: {
		setUser: (state, action) => {
			// state.user = action.payload.user;
			// state.token = action.payload.token;
			// state.refreshToken = action.payload.refreshToken;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(loginUser.fulfilled, (state, { payload }) => {
				// console.log("payload", payload);
				state.token = payload.data;
				state.loader = false;
				// state.isSuccess = true;
				// return state;
			})
			.addMatcher(isPending(...[loginUser]), state => {
				state.loader = true;
			})

			.addMatcher(isRejected(...[loginUser]), (state, { payload }) => {
				// state.isError = true;
				state.loader = false;
				// state.loadingData = false;
			});
	},
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
