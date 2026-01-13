import { useEffect } from "react";
import { queryClient } from "../lib/queryClient";

export const useWebSocket = (wsUrl?: string) => {
	useEffect(() => {
		if (!wsUrl) return;

		const ws = new WebSocket(wsUrl);

		ws.onmessage = (event) => {
			const payload = JSON.parse(event.data);
			queryClient.setQueryData(["initialData"], (oldData: any) => ({
				...oldData,
				...payload,
			}));
		};

		return () => ws.close();
	}, [wsUrl, queryClient]);
};
