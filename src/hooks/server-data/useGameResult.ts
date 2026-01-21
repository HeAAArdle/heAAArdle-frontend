import { useQuery } from "@tanstack/react-query";
import type { SubmitGameData } from "../../services/api/game/submit-game";

export const useGameResult = () => {
	return useQuery<SubmitGameData | null>({
		queryKey: ["gameResult"],
		queryFn: () => null,
		enabled: false,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};
