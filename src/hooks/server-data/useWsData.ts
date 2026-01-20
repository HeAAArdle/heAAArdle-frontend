import { useQuery } from "@tanstack/react-query";
import type { StartGameData } from "../../services/api/game/start-game";

export const useWsData = () => {
	return useQuery<StartGameData | null>({
		queryKey: ["gameStart"],
		queryFn: () => null, // won't run, just reads cache
		enabled: false,
		initialData: null,
		staleTime: Infinity,
	});
};
