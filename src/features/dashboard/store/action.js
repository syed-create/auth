import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersService } from "../services/service";

export const getUsers = createAsyncThunk(
	"dashboard/users",
	async (_, { dispatch, getState, rejectWithValue }) => {
		try {
			const res = await getUsersService();
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);
