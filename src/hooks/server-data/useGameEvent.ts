import { useQuery } from "@tanstack/react-query";
import type { WsReturnType } from "../useWebSocket";

export const useGameEvent = () => {
	return useQuery<WsReturnType | null>({
		queryKey: ["gameEvent"],
		queryFn: () => null,
		enabled: false,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};
