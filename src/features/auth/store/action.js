import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "../services/service";

export const loginUser = createAsyncThunk(
	"auth/login",
	async (userData, { dispatch, getState, rejectWithValue }) => {
		try {
			const res = await loginService(userData);
			return res;
		} catch (error) {
			console.log("login failed", error);
			return rejectWithValue(error);
		}
	}
);
