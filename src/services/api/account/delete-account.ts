import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../../lib/api/authApi";
import { queryClient } from "../../../lib/queryClient";

const deleteUser = async () => {
	return authApi.delete("/user/delete/");
};

export const useDeleteUser = () => {
	return useMutation({
		mutationFn: deleteUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["auth"] });
		},
	});
};
