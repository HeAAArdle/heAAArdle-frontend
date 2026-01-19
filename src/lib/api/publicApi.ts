import axios from "axios";

export const publicApi = axios.create({
	baseURL: "http://127.0.0.1:8000/api/v1", // TODO
	withCredentials: false, // true if using cookies
});

// // Optional: request interceptor (auth token)
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
