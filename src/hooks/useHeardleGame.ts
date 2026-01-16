import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useGameStart } from "../services/api/game/start-game";
import { useWebSocket, type WsReturnType } from "./useWebSocket";
import { useQuery } from "@tanstack/react-query";
import type { StartGameData } from "../services/api/game/start-game";

type UseHeardleGameProps = "original" | "daily" | "rapid" | "lyrics";

const useHeardleGame = (mode: UseHeardleGameProps) => {
	const { noOfGuesses } = useContext(UserContext);
	const gameStartedRef = useRef(false);

	const [guessText, setGuessText] = useState("");
	const [guesses, setGuesses] = useState(() =>
		new Array(noOfGuesses).fill(null)
	);
	const [currGuess, setCurrGuess] = useState(0);
	const [hasWon, setHasWon] = useState(false); // maybe state rather than boolean

	const { mutate, isPending: isWsPending, error: wsError } = useGameStart();

	const { data: wsData } = useQuery<StartGameData | null>({
		queryKey: ["gameStart"],
		queryFn: () => null, // won't run, just reads cache
		initialData: null,
		staleTime: Infinity,
	});

	// starts the game
	useEffect(() => {
		if (gameStartedRef.current) return;
		gameStartedRef.current = true;

		if (!wsData) mutate({ mode: "original", date: null }); // this changes based on mode
	}, [mutate, mode, wsData]);

	// connect to websocket when we have url
	const { sendMessage, closeConnection } = useWebSocket(wsData?.wsURL);

	// ws cache
	const { data: gameEvent } = useQuery<WsReturnType | null>({
		queryKey: ["gameEvent"],
		queryFn: () => null,
		enabled: false,
		staleTime: Infinity,
		gcTime: Infinity,
	});

	// update game state based on ws
	useEffect(() => {
		console.log(gameEvent);
		if (!gameEvent || gameEvent.type !== "result") return;

		setGuesses((prev) => {
			const updated = [...prev];
			updated[currGuess] = gameEvent.guess;
			return updated;
		});

		if (gameEvent.is_correct) {
			setHasWon(true);
			console.log("cleanup 1");
			handleCleanup();
			return;
		}

		if (currGuess === noOfGuesses - 1) {
			console.log(currGuess, noOfGuesses);
			console.log("cleanup 2");
			handleCleanup();
			return;
		}

		setCurrGuess(currGuess + 1);
	}, [gameEvent]);

	const handleCleanup = () => {
		// close ws
		console.log("cleaning up");
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
	};

	return {
		isWsPending,
		wsError,
		guessText,
		setGuessText,
		guesses,
		currGuess,
		hasWon,
		handleGuess,
		handleSkip,
		audio: wsData?.audio,
		startAt: wsData?.audioStartAt,
	};
};

export default useHeardleGame;
