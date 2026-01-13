import { useQuery } from "@tanstack/react-query";
import { getSongs } from "../api/songs";

export const useSongs = () =>
	useQuery({
		queryKey: ["songs"],
		queryFn: getSongs,
	});
