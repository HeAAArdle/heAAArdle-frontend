import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useGameStart } from "../services/api/game/start-game";
import { useWebSocket, type WsReturnType } from "./useWebSocket";
import { useQuery } from "@tanstack/react-query";
import { useGameSubmit } from "../services/api/game/submit-game";
import { useWsData } from "./server-data/useWsData";
import { useGameEvent } from "./server-data/useGameEvent";

type UseHeardleGameProps = "original" | "daily" | "rapid" | "lyrics";

const useHeardleGame = (mode: UseHeardleGameProps) => {
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
	} = useGameStart();

	// const {
	// 	mutate: sendResult,
	// 	isPending: isGameSubmitted,
	// 	error: submitError,
	// } = useGameSubmit();

	const { data: wsData } = useWsData();

	// starts the game
	useEffect(() => {
		if (gameStartedRef.current) return;
		gameStartedRef.current = true;

		if (!wsData) startGame({ mode: "original", date: null }); // this changes based on mode
	}, [startGame, mode, wsData]);

	// connect to websocket when we have url
	const { sendMessage, closeConnection } = useWebSocket(wsData?.wsURL);

	// ws cache
	const { data: gameEvent } = useGameEvent();

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
	}, [gameEvent]);

	const handleCleanup = () => {
		// close ws
		closeConnection();
		// if has profile
		// sent to backend updated
	};

	const handleGuess = () => {
		if (!guessText.trim()) return;
		sendMessage({ type: "guess", guess: guessText });
		setGuessText("");
	};

	const handleSkip = () => {
		sendMessage({ type: "guess", guess: "" });
		setGuessText("");
		// TODO: when skip is pressed also reset the player
	};

	return {
		isWsPending,
		wsError,
		guessText,
		setGuessText,
		guesses,
		currGuess,
		hasWon: gameEvent?.is_correct,
		isGameDone: gameEvent?.done,
		handleGuess,
		handleSkip,
		audio: wsData?.audio,
		startAt: wsData?.audioStartAt,
	};
};

export default useHeardleGame;
