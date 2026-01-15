import { useEffect, useRef } from "react";
import { queryClient } from "../lib/queryClient";

export type WsReturnType = {
	type: string;
	is_correct: boolean;
	done: boolean;
	guess: string;
};

export const useWebSocket = (wsUrl?: string) => {
	const wsRef = useRef<WebSocket | null>(null);

	useEffect(() => {
		if (!wsUrl || wsRef.current) return;

		const ws = new WebSocket(wsUrl);
		wsRef.current = ws;

		ws.onmessage = (event) => {
			const payload: WsReturnType = JSON.parse(event.data);
			queryClient.setQueryData(["gameEvent"], payload);
		};

		return () => {
			ws.close();
			wsRef.current = null;
		};
	}, [wsUrl]);

	const closeConnection = () => {
		wsRef.current?.close();
	};

	const sendMessage = (data: any) => {
		if (wsRef.current?.readyState === WebSocket.OPEN) {
			wsRef.current.send(JSON.stringify(data));
		}
	};

	return { sendMessage, closeConnection };
};
