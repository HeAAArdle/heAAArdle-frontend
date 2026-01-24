import { useMutation } from "@tanstack/react-query";
import { publicApi } from "../../../lib/api/publicApi";
import { queryClient } from "../../../lib/queryClient";
import { authStorage } from "../../../lib/authStorage";
import type { AuthInput, AuthState } from "../../../types";

type AuthDataType = {
	access_token: string;
	token_type: string;
};

const getSignInFn = async (payload: AuthInput): Promise<AuthDataType> => {
	const response = await publicApi.post("user/signin/", payload);
	return response.data;
};

export const useSignIn = () => {
	return useMutation({
		mutationFn: (payload: AuthInput) => getSignInFn(payload),
		onSuccess: (data) => {
			console.log(data);
			authStorage.set(data.access_token);
			queryClient.setQueryData<AuthState>(["auth"], {
				isAuthenticated: true,
				username: "",
				// todo find way to call useUser
			});
		},
	});
};
