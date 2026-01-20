import { useMutation } from "@tanstack/react-query";
import { publicApi } from "../../../lib/api/publicApi";
import { queryClient } from "../../../lib/queryClient";

type SubmitGameInput = {
	wsGameSessionID: string;
	mode: "original" | "daily";
	won: boolean;
	attempts: number;
	date: string | undefined; // change to date
};

type SubmitGameData = {
	mode: "original" | "daily";
	won: boolean;
	attempts: number;
	title: string;
	releaseYear: string;
	album: string;
	shareLink: string;
	artist: [string];
};

const getGameSubmitFn = async (
	payload: SubmitGameInput,
): Promise<SubmitGameData> => {
	const response = await publicApi.post("/game/submit", payload);
	return response.data;
};

export const useGameSubmit = () => {
	return useMutation({
		mutationFn: getGameSubmitFn,
		onSuccess: (data) => {
			queryClient.setQueryData(["gameResult"], data);
		},
	});
};
