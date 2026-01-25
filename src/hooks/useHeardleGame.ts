import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useGameStart } from "../services/api/game/start-game";
import { useWebSocket } from "./useWebSocket";
import { useGameSubmit } from "../services/api/game/submit-game";
import { useWsData } from "./server-data/useWsData";
import { useGameEvent } from "./server-data/useGameEvent";
import { useAuthState } from "./server-data/useAuthState";
import { isResultMode } from "../utils/isResultMode";
import { queryClient } from "../lib/queryClient";
import type { GameMode } from "../types";
import { useGameResult } from "./server-data/useGameResult";

const useHeardleGame = (mode: GameMode, date: string | null) => {
	const { noOfGuesses } = useContext(UserContext);
	const gameStartedRef = useRef(false);

	const [guessText, setGuessText] = useState("");
	const [guesses, setGuesses] = useState(() =>
		new Array(noOfGuesses).fill(null),
	);
	const [currGuess, setCurrGuess] = useState(0);

	const {
		mutate: startGame,
		isPending: isWsPending,
		error: wsError,
	} = useGameStart(mode);

	const { data: wsData } = useWsData(mode, date);
	const { data: authState } = useAuthState();

	// starts the game
	useEffect(() => {
		if (gameStartedRef.current) return;
		gameStartedRef.current = true;

		if (!wsData) startGame({ mode: mode, date: date });
	}, [startGame, mode, wsData, date]);

	// connect to websocket when we have url
	const { sendMessage } = useWebSocket(mode, date, wsData?.wsURL);

	// ws cache
	const { data: gameEvent } = useGameEvent(mode, date);

	const { mutate: sendResult } = useGameSubmit();
	const { data: gameResult } = useGameResult(mode, date);

	// update game state based on ws
	useEffect(() => {
		if (!gameEvent || gameEvent.type !== "result") return;

		setGuesses((prev) => {
			const updated = [...prev];
			updated[currGuess] = gameEvent.guess;
			return updated;
		});

		if (gameEvent.done) {
			handleCleanup();
			return;
		}

		setCurrGuess(currGuess + 1);
	}, [gameEvent, gameResult]);

	const handleCleanup = () => {
		// if has profile
		if (!isResultMode(mode)) return;
		console.log(gameResult)
		if (!authState?.isAuthenticated || !wsData || !gameEvent || !gameResult)
			return;
		// sent to backend updated
		sendResult({
			wsGameSessionID: wsData.wsGameSessionID,
			songID: gameResult?.songID,
			attempts: gameEvent?.attempts,
			date: wsData.date,
			mode: mode,
			won: gameEvent?.is_correct,
		});
	};

	const handleGuess = () => {
		if (!guessText.trim()) return;
		sendMessage({ type: "guess", guess: guessText });
		setGuessText("");
	};

	const handleSkip = () => {
		sendMessage({ type: "guess", guess: "" });
		setGuessText("");
	};

	const handleNewGame = (mode: GameMode, date: string | null = null) => {
		setGuesses(new Array(noOfGuesses).fill(null));
		setCurrGuess(0);
		setGuessText("");
		gameStartedRef.current = false;

		if (date === null) {
			queryClient.setQueryData(["gameResult", mode], null);
			queryClient.setQueryData(["gameEvent", mode], null);
			queryClient.setQueryData(["gameStart", mode], null);
		} else {
			queryClient.setQueryData(["gameResult", mode, date], null);
			queryClient.setQueryData(["gameEvent", mode, date], null);
			queryClient.setQueryData(["gameStart", mode, date], null);
		}
		startGame({ mode: mode, date: date });
	};

	return {
		isWsPending,
		wsError,
		guessText,
		setGuessText,
		guesses,
		currGuess,
		isGameDone: gameEvent?.done,
		handleGuess,
		handleSkip,
		audio: wsData?.audio,
		startAt: wsData?.audioStartAt,
		handleNewGame,
	};
};

export default useHeardleGame;
