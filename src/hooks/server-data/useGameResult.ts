import { useQuery } from "@tanstack/react-query";
import type { WsResultType } from "../useWebSocket";

export const useGameResult = () => {
	return useQuery<WsResultType | null>({
		queryKey: ["gameResult"],
		queryFn: () => null,
		enabled: false,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};
