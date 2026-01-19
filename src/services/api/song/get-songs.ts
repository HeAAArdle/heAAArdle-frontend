import { useQuery } from "@tanstack/react-query";
import { publicApi } from "../../../lib/api/publicApi";

type SongType = {
	title: string;
};

const getSongsFn = async (): Promise<SongType[]> => {
	const response = await publicApi.get("/songs/");
	return response.data;
};

export const useSongs = () =>
	useQuery({
		queryKey: ["songs"],
		queryFn: getSongsFn,
		staleTime: Infinity,
		gcTime: Infinity,

		// 🚫 Disable all automatic refetches
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});
