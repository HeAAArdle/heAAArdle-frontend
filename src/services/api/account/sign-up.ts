import { useMutation } from "@tanstack/react-query";
import { publicApi } from "../../../lib/api/publicApi";
import { queryClient } from "../../../lib/queryClient";
import { authStorage } from "../../../lib/authStorage";

type SignUpInput = {
	username: string;
	password: string;
};

type SignUpData = {
	username: string;
	token: string;
};

const getSignUpFn = async (payload: SignUpInput): Promise<SignUpData> => {
	const response = await publicApi.post("user/signup/", payload);
	return response.data;
};

export const useSignUp = () => {
	return useMutation({
		mutationFn: (payload: SignUpInput) => getSignUpFn(payload),
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
