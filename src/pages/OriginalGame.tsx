import { useContext, useEffect, useState } from "react";
import MusicPlayer from "../components/compound/MusicPlayer";
import GuessInput from "../components/simple/GuessInput";
import GuessHistory from "../components/simple/GuessHistory";
import Button from "../components/simple/Button";
import { useWebSocket } from "../hooks/useWebSocket";
import { UserContext } from "../context/UserContext";
import { useGameStart } from "../services/api/game/start-game";
import { useSongs } from "../services/api/song/get-songs";

const OriginalGame = () => {
	const { noOfGuesses } = useContext(UserContext);
	const { SONGS } = useSongs();

	// move logic into diff location
	const {
		mutate,
		data: wsData,
		isPending: isWsLoading,
		error: wsError,
	} = useGameStart();

	useEffect(() => {
		if (!wsData) {
			mutate("original");
		}
	}, [mutate, wsData]);

	useWebSocket(wsData?.wsURL);

	const [guessText, setGuessText] = useState("");
	const [guesses, setGuesses] = useState(() =>
		new Array(noOfGuesses).fill("")
	);
	const [currGuess, setCurrGuess] = useState(0);
	const [hasWon, setHasWon] = useState(false);

	// basic err stuff
	if (isWsLoading) return <p>Starting game...</p>;
	if (wsError) return <p>Failed to start game</p>;

	return (
		<div className="h-full flex flex-col space-y-4 items-center justify-center">
			<span className="dm-sans-400 font-bold text-8xl bg-linear-to-r from-primary-500 to-accent-300 bg-clip-text text-transparent mb-8">
				Heardle
			</span>
			<MusicPlayer />
			<Button text="Skip" type="secondary" />
			<div className="w-132 space-y-4">
				{guesses.map((guess, index) =>
					index === currGuess && !hasWon ? (
						<GuessInput
							key={index}
							value={guessText}
							onChange={(text) => setGuessText(text)}
							onClick={() => 1}
						/>
					) : guess === "" ? (
						<GuessHistory
							key={index}
							result={"unanswered"}
							text={guess}
						/>
					) : (
						<GuessHistory
							key={index}
							result={hasWon ? "correct" : "incorrect"}
							text={guess}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default OriginalGame;
