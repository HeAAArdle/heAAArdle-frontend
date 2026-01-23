import { useMutation } from "@tanstack/react-query";
import { publicApi } from "../../../lib/api/publicApi";
import { queryClient } from "../../../lib/queryClient";
import type { GameMode } from "../../../types";

export type StartGameData = {
	wsGameSessionID: string;
	wsURL: string;
	expiresIn: number;
	audio: string; // to check
	audioStartAt: number;
	date?: string; // ayusin to date???
};

export type StartGameInput = {
	mode: GameMode;
	date: string | null;
};

const getGameStartFn = async (
	payload: StartGameInput,
): Promise<StartGameData> => {
	const response = await publicApi.post("/game/start", payload);
	return response.data;
};

export const useGameStart = (mode: GameMode) =>
	useMutation({
		mutationFn: (mode: StartGameInput) => getGameStartFn(mode),
		onSuccess: (data) => {
			console.log(data);
			if (mode === "archive")
				queryClient.setQueryData(["gameStart", mode, data.date], data);
			else queryClient.setQueryData(["gameStart", mode], data);
		},
	});
