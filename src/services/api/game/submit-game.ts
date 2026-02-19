import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../../lib/api/authApi";

type SubmitGameInput = {
	wsGameSessionID: string;
	songID: string;
	mode: "original" | "daily";
	won: boolean;
	attempts: number;
	date: string | undefined; // change to date
};

const getGameSubmitFn = async (payload: SubmitGameInput): Promise<void> => {
	await authApi.post("/game/submit/", payload);
};

export const useGameSubmit = () => {
	return useMutation({
		mutationFn: getGameSubmitFn,
	});
};
