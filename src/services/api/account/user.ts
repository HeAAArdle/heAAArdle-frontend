import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../../lib/api/authApi";
import { queryClient } from "../../../lib/queryClient";
import type { AuthData } from "../../../types";

type UserType = {
	username: string;
};

const getUser = async (): Promise<UserType> => {
	const response = await authApi.post("/user");
	return response.data;
};

export const useUser = () => {
	return useMutation({
		mutationFn: getUser,
		onSuccess: (data) => {
			queryClient.setQueryData(["auth"], (prev: AuthData) => {
				if (!prev) return prev;
				return {
					...prev,
					username: data.username,
				};
			});
		},
	});
};
