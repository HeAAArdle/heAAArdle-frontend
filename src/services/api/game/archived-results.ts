import { useQuery } from "@tanstack/react-query";
import { publicApi } from "../../../lib/api/publicApi";

type ArchiveResultsParams = {
	year: number;
	month: number;
};

type ArchiveDayType = {
	date: string;
	available: boolean;
	result: boolean | null;
};

type ArchiveResultsData = {
	numberOfDays: number;
	startingDay: number;
	days: ArchiveDayType[];
};

const getArchivedResults = async (
	params: ArchiveResultsParams,
): Promise<ArchiveResultsData> => {
	const response = await publicApi.get("/archive/", {
		params,
	});
	return response.data;
};

export const useArchiveResults = (params: ArchiveResultsParams) =>
	useQuery({
		queryKey: ["archive", params.year, params.month],
		queryFn: () => getArchivedResults(params),
		staleTime: Infinity,
		gcTime: Infinity,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});
