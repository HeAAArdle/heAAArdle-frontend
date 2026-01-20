import { useMutation } from "@tanstack/react-query";
import { publicApi } from "../../../lib/api/publicApi";
import { queryClient } from "../../../lib/queryClient";
import { authStorage } from "../../../lib/authStorage";
import type { AuthData, AuthInput, AuthState } from "../../../types";

const getSignInFn = async (payload: AuthInput): Promise<AuthData> => {
	const response = await publicApi.post("user/signin/", payload);
	return response.data;
};

export const useSignIn = () => {
	return useMutation({
		mutationFn: (payload: AuthInput) => getSignInFn(payload),
		onSuccess: (data) => {
			authStorage.set(data.token);
			queryClient.setQueryData<AuthState>(["auth"], {
				isAuthenticated: true,
				username: data.username,
			});
		},
	});
};
