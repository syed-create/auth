import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUsersService } from "../services/service";

export const getUsers = createAsyncThunk(
	"dashboard/users",
	async (_, { dispatch, getState, rejectWithValue, signal }) => {
		const source = axios.CancelToken.source();
		signal.addEventListener("abort", () => {
			source.cancel();
		});
		try {
			const res = await getUsersService(source);
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);
