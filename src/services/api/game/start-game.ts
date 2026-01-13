import { useMutation } from "@tanstack/react-query";
import { api } from "../../../lib/axios";

type StartGameData = {
	wsGameSessionID: string;
	wsURL: string;
	expiresIn: number;
	audio: string; // to check
	startAt: number;
	date?: string; // ayusin to date???
};

const getGameStartFn = async (payload: string): Promise<StartGameData> => {
	const response = await api.post("/game/start", payload);
	return response.data;
};

export const useGameStart = () =>
	useMutation({
		mutationFn: (mode: string) => getGameStartFn(mode),
	});
