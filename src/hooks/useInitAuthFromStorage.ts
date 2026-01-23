import { useEffect } from "react";
import { authStorage } from "../lib/authStorage";
import { useUser } from "../services/api/account/user";

export const useInitAuthFromStorage = () => {
	const { mutate } = useUser();
	const token = authStorage.get();

	useEffect(() => {
		if (!token) return;
		mutate();
	}, [token, mutate]);
};
