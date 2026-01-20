import { useQuery } from "@tanstack/react-query";
import type { AuthState } from "../../types";

export const useAuthState = () => {
	return useQuery<AuthState | null>({
		queryKey: ["auth"],
		queryFn: () => null,
		enabled: false,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};
