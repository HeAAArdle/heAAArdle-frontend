import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/axios";

const getSongsFn = async () => {
	const response = await api.get("/songs/");
	return response.data;
};

export const useSongs = () =>
	useQuery({
		queryKey: ["songs"],
		queryFn: getSongsFn,
	});
