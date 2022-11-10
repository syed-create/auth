import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";

export const loginService = data => {
	return axios.post(baseUrl + "login", data).then(res => {
		return res;
	});
};
