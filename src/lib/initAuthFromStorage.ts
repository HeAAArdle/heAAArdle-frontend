import type { QueryClient } from "@tanstack/react-query";
import { authStorage } from "./authStorage";
import type { AuthState } from "../types";

export const initAuthFromStorage = (queryClient: QueryClient) => {
	const token = authStorage.get();
	if (!token) return;

	const username = "user"; // get func as api call

	queryClient.setQueryData<AuthState>(["auth"], {
		isAuthenticated: true,
		username,
	});
};
