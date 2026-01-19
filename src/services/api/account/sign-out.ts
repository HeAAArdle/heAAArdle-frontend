import { useMutation } from "@tanstack/react-query";
import { publicApi } from "../../../lib/api/publicApi";
import { queryClient } from "../../../lib/queryClient";
import { authStorage } from "../../../lib/authStorage";

const getSignOutFn = async () => await publicApi.post("user/signout/");

export const useSignOut = () => {
	return useMutation({
		mutationFn: getSignOutFn,
		onSuccess: () => {
			authStorage.clear();
			queryClient.setQueryData(["auth"], {
				isAutheticated: false,
				username: null,
			});
			queryClient.removeQueries({
				queryKey: ["statistics"],
				exact: true,
			});
			window.location.href = "/";
		},
	});
};
