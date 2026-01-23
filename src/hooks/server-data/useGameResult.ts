import { useQuery } from "@tanstack/react-query";
import type { WsResultType } from "../useWebSocket";
import type { GameMode } from "../../types";

export const useGameResult = (mode: GameMode, date: string | null) => {
	const queryKey = date ? ["gameResult", mode, date] : ["gameResult", mode];
	return useQuery<WsResultType | null>({
		queryKey: queryKey,
		queryFn: () => null,
		enabled: false,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};
