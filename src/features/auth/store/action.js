import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { loginService } from "../services/service";

export const loginUser = createAsyncThunk(
	"auth/login",
	async (userLoginPayload, { dispatch, getState, rejectWithValue }) => {
		try {
			const res = await loginService(userLoginPayload);
			return res;
		} catch (err) {
			message.error("Invalid email/password!");
			return rejectWithValue(err.response.data);
		}
	}
);
