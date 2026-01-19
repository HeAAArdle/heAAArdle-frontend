import { useMutation } from "@tanstack/react-query";
import { publicApi } from "../../../lib/api/publicApi";
import { queryClient } from "../../../lib/queryClient";
import { authStorage } from "../../../lib/authStorage";

type SignInInput = {
	username: string;
	password: string;
};

type SignInData = {
	username: string;
	token: string;
};

const getSignInFn = async (payload: SignInInput): Promise<SignInData> => {
	const response = await publicApi.post("user/signin", payload);
	return response.data;
};

export const useSignIn = () => {
	return useMutation({
		mutationFn: (payload: SignInInput) => getSignInFn(payload),
		onSuccess: (data) => {
			authStorage.set(data.token);
			queryClient.setQueryData(["auth"], {
				isAutheticated: true,
				username: data.username,
			});
			window.location.href = "/";
		},
	});
};
