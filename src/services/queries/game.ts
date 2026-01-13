import { useMutation, useQuery } from "@tanstack/react-query";
import { startGame, submitGame, type SubmitGameData } from "../api/game";
import { queryClient } from "../../lib/queryClient";

export const useGameStartQuery = (payload: { mode: string }) => {
	return useQuery({
		queryKey: ["InitialData", payload],
		queryFn: () => startGame(payload),
		staleTime: 1000 * 60,
	});
};

export const useSubmitGameMutation = () => {
	return useMutation({
		mutationFn: (data: SubmitGameData) => submitGame(data),
		onSuccess: () => {
			console.log("data send");
			queryClient.invalidateQueries(["???"]); // di ko alam
		},
		onError: (error) => {
			console.error("Failed", error);
		},
	});
};
