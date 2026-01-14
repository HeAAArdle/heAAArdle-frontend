import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useGameStart } from "../services/api/game/start-game";
import { useWebSocket } from "./useWebSocket";

type UseHeardleGameProps = "original" | "daily" | "rapid" | "lyrics";

const useHeardleGame = (mode: UseHeardleGameProps) => {
	const { noOfGuesses } = useContext(UserContext);
	const {
		mutate,
		data: wsData,
		isPending: isWsPending,
		error: wsError,
	} = useGameStart();

	// starts the game
	useEffect(() => {
		if (!wsData) {
			mutate("original"); // this changes based on mode
		}
	}, [mutate, wsData]);

	useWebSocket(wsData?.wsURL);

	const [guessText, setGuessText] = useState("");
	const [guesses, setGuesses] = useState(() =>
		new Array(noOfGuesses).fill(null)
	);
	const [currGuess, setCurrGuess] = useState(0);
	const [hasWon, setHasWon] = useState(false); // maybe state rather than boolean

	const handleCleanup = () => {
		// close ws
		// if has profile
		// sent to backend updated
	};

	const handleGuess = () => {
		setGuesses((prev) => {
			const updated = [...prev];
			prev[currGuess] = guessText;
			return updated;
		});
		setGuessText("");

		// send guess to backend (ws)
		// will return whether correct or not
		setHasWon(true); // based on backend

		// if won
		if (hasWon) {
			handleCleanup();
			// show win popup?
			return;
		}

		// if loss
		else if (currGuess === noOfGuesses - 1) {
			handleCleanup();
			// show lose popup?
			return;
		}

		// if mistake
		setCurrGuess((prev) => prev++);

		// send to backend updated score
	};

	const handleSkip = () => {
		setGuesses((prev) => {
			const updated = [...prev];
			prev[currGuess] = "";
			return updated;
		});
		setGuessText("");

		if (currGuess === noOfGuesses - 1) {
			handleCleanup();
			// show lose popup?
			return;
		}

		setCurrGuess((prev) => prev++);
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
	};
};

export default useHeardleGame;
