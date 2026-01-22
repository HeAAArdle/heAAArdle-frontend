import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../../lib/api/authApi";
import { queryClient } from "../../../lib/queryClient";

type UserStatisticsStatType = {
	gamesPlayed: number;
	winCount: number;
	winPercentage: number;
	currentStreak: number;
	maximumStreak: number;
	guessDistribution: [number, number, number, number, number, number];
};

type UserStatisticsType = {
	original: UserStatisticsStatType;
	daily: UserStatisticsStatType;
};

const getUserStatistics = async (): Promise<UserStatisticsType> => {
	const response = await authApi.post("/statistics/");
	return response.data;
};

export const useUserStatistics = () => {
	return useMutation({
		mutationFn: getUserStatistics,
		onSuccess: (data) =>
			queryClient.setQueryData(["user-statistics"], data),
	});
};
