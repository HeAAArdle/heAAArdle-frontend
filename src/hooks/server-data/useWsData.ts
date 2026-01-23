import { useQuery } from "@tanstack/react-query";
import type { StartGameData } from "../../services/api/game/start-game";
import type { GameMode } from "../../types";

export const useWsData = (mode: GameMode, date: string | null) => {
	const queryKey = date ? ["gameStart", mode, date] : ["gameStart", mode];

	return useQuery<StartGameData | null>({
		queryKey: queryKey,
		queryFn: () => null,
		enabled: false,
		initialData: null,
		staleTime: Infinity,
	});
};
