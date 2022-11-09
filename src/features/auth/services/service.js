import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";

export const loginService = data => {
	return axios
		.post(baseUrl + "api/login", data)
		.then(res => {
			return res;
		})
		.catch(error => {
			return error;
		});
};
