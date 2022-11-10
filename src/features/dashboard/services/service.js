import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";

export const getUsersService = () => {
	return axios.get(baseUrl + "users").then(res => {
		return res;
	});
};
