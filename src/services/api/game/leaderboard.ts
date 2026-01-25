import { useQuery } from "@tanstack/react-query";
import { publicApi } from "../../../lib/api/publicApi";

type LeaderboardUserType = {
	username: string;
	isUser: boolean;
	numberOfWins: number;
	rank: number | null;
};

export type LeaderboardBaseType = {
	weekly: LeaderboardUserType[];
	monthly: LeaderboardUserType[];
	allTime: LeaderboardUserType[];
};

type LeaderboardCompleteType = LeaderboardBaseType & {
	daily: LeaderboardUserType[];
};

type LeaderboardDataType = {
	original: LeaderboardCompleteType;
	daily: LeaderboardBaseType;
};

const getLeaderboardData = async (): Promise<LeaderboardDataType> => {
	const response = await publicApi.get("/leaderboard/");
	return response.data;
};

export const useLeaderboardData = () =>
	useQuery({
		queryKey: ["leaderboard"],
		queryFn: getLeaderboardData,
		staleTime: Infinity,
		gcTime: Infinity,
		refetchOnWindowFocus: false,
	});
