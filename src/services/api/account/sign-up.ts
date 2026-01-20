import { useMutation } from "@tanstack/react-query";
import { publicApi } from "../../../lib/api/publicApi";
import { queryClient } from "../../../lib/queryClient";
import { authStorage } from "../../../lib/authStorage";
import type { AuthData, AuthInput, AuthState } from "../../../types";

const getSignUpFn = async (payload: AuthInput): Promise<AuthData> => {
	const response = await publicApi.post("user/signup/", payload);
	return response.data;
};

export const useSignUp = () => {
	return useMutation({
		mutationFn: (payload: AuthInput) => getSignUpFn(payload),
		onSuccess: (data) => {
			authStorage.set(data.token);
			queryClient.setQueryData<AuthState>(["auth"], {
				isAuthenticated: true,
				username: data.username,
			});
		},
	});
};
