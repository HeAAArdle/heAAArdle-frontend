import { api } from "../../lib/axios";

export const getSongs = async () => {
	const { data } = await api.get("/songs/");
	return data;
};
