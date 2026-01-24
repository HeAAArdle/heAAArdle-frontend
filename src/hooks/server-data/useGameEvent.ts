import { useQuery } from "@tanstack/react-query";
import type { WsGuessType } from "../useWebSocket";
import type { GameMode } from "../../types";

export const useGameEvent = (mode: GameMode, date: string | null) => {
	const queryKey = date ? ["gameEvent", mode, date] : ["gameEvent", mode];
	return useQuery<WsGuessType | null>({
		queryKey: queryKey,
		queryFn: () => null,
		enabled: false,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};
