import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../lib/queryClient";
import { authStorage } from "../../../lib/authStorage";
import { authApi } from "../../../lib/api/authApi";

const getSignOutFn = async () => await authApi.post("user/signout/");

export const useSignOut = () => {
	return useMutation({
		mutationFn: getSignOutFn,
		onSuccess: () => {
			authStorage.clear();
			console.log("token cleared");
			queryClient.setQueryData(["auth"], {
				isAutheticated: false,
				username: null,
			});
			queryClient.removeQueries({
				queryKey: ["statistics"],
				exact: true,
			});
		},
	});
};
