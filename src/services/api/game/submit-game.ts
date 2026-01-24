import { useMutation } from "@tanstack/react-query";
import { publicApi } from "../../../lib/api/publicApi";

type SubmitGameInput = {
	wsGameSessionID: string;
	songID: string;
	mode: "original" | "daily";
	won: boolean;
	attempts: number;
	date: string | undefined; // change to date
};

const getGameSubmitFn = async (payload: SubmitGameInput): Promise<void> => {
	await publicApi.post("/game/submit", payload);
};

export const useGameSubmit = () => {
	return useMutation({
		mutationFn: getGameSubmitFn,
	});
};
