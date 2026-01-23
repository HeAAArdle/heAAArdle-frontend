import { useEffect, useRef } from "react";
import { queryClient } from "../lib/queryClient";

export type WsGuessType = {
	type: "result";
	is_correct: boolean;
	done: boolean;
	guess: string;
	attempts: number;
};

export type WsResultType = {
	type: "song metadata";
	title: string;
	releaseYear: number;
	album: string;
	shareLink: string;
	songID: string;
	artists: string[];
};

export type WsMessage = WsGuessType | WsResultType;

export const useWebSocket = (wsUrl?: string) => {
	const wsRef = useRef<WebSocket | null>(null);

	useEffect(() => {
		if (!wsUrl || wsRef.current) return;

		const ws = new WebSocket(wsUrl);
		wsRef.current = ws;

		ws.onmessage = (event) => {
			const payload: WsMessage = JSON.parse(event.data);
			switch (payload.type) {
				case "result": {
					queryClient.setQueryData(["gameEvent"], payload);
					break;
				}

				case "song metadata": {
					queryClient.setQueryData(["gameResult"], payload);
					break;
				}
			}
		};

		return () => {
			wsRef.current = null;
		};
	}, [wsUrl]);

	const sendMessage = (data: any) => {
		if (wsRef.current?.readyState === WebSocket.OPEN) {
			wsRef.current.send(JSON.stringify(data));
		}
	};

	return { sendMessage };
};
