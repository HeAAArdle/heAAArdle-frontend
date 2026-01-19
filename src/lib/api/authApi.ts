import axios from "axios";
import { authStorage } from "../authStorage";

export const authApi = axios.create({
	baseURL: "http://127.0.0.1:8000/api/v1",
});

authApi.interceptors.request.use((config) => {
	const token = authStorage.get();
	if (token) {
		config.headers = config.headers ?? {};
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

authApi.interceptors.response.use(
	(res) => res,
	(error) => {
		if (error.response?.status === 401) {
			authStorage.clear();
			window.location.href = "/";
		}
		return Promise.reject(error);
	},
);
