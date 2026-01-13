import { api } from "../../lib/axios";

export type StartGameData = {
	wsGameSessionID: string;
	wsURL: string;
	expiresIn: number;
	audio: string; // to check
	startAt: number;
	date?: string; // ayusin to date???
};

export type SubmitGameData = {
	wsGameSessionID: string;
	mode: "original" | "daily";
	won: boolean;
	attempts: number;
	date?: string; // to change
};

// TODO: can export mode to its own type
export const startGame = async (payload: {
	mode: string;
}): Promise<StartGameData> => {
	const { data } = await api.post("/game/start", payload);
	return data;
};

export const submitGame = async (data: SubmitGameData) => {
	const { data: response } = await api.post("/game/submit", data);
	return response;
};
