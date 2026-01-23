import { useQuery } from "@tanstack/react-query";
import type { WsGuessType } from "../useWebSocket";

export const useGameEvent = () => {
	return useQuery<WsGuessType | null>({
		queryKey: ["gameEvent"],
		queryFn: () => null,
		enabled: false,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};
