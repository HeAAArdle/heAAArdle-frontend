import axios from "axios";

export const api = axios.create({
	baseURL: "", // TODO
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
