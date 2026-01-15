import { useMutation } from "@tanstack/react-query";
import { api } from "../../../lib/axios";
import { data } from "react-router-dom";
import { queryClient } from "../../../lib/queryClient";

export type StartGameData = {
	wsGameSessionID: string;
	wsURL: string;
	expiresIn: number;
	audio: string; // to check
	startAt: number;
	date?: string; // ayusin to date???
};

type StartGameInput = {
	mode: "original" | "daily" | "rapid" | "lyrics" | "archive";
	date: string | null;
};

const getGameStartFn = async (
	payload: StartGameInput
): Promise<StartGameData> => {
	const response = await api.post("/game/start", payload);
	return response.data;
};

export const useGameStart = () =>
	useMutation({
		mutationFn: (mode: StartGameInput) => getGameStartFn(mode),
		onSuccess: (data) => {
			queryClient.setQueryData(["gameStart"], data);
		},
	});
