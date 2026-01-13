import { useContext, useState } from "react";
import MusicPlayer from "../components/compound/MusicPlayer";
import GuessInput from "../components/simple/GuessInput";
import GuessHistory from "../components/simple/GuessHistory";
import Button from "../components/simple/Button";
import { useWebSocket } from "../hooks/useWebSocket";
import { useGameStartQuery } from "../services/queries/game";
import { UserContext } from "../context/UserContext";

const OriginalGame = () => {
	const { SONGS, isSongsLoading, songsError, noOfGuesses } =
		useContext(UserContext);

	// move logic into diff location
	const {
		data: wsData,
		isLoading: isWsLoading,
		error: wsError,
	} = useGameStartQuery({ mode: "original" });
	useWebSocket(wsData?.wsURL);

	const [guessText, setGuessText] = useState("");
	const [guesses, setGuesses] = useState(() => new Array(6).fill(""));
	const [currGuess, setCurrGuess] = useState(0);
	const [hasWon, setHasWon] = useState(false);

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

				{/* <GuessHistory result={"incorrect"} text={"Taylor Swift"} />
				<GuessHistory result={"incorrect"} text={"Taylor Swift"} />
				<GuessHistory result={"correct"} text={"Ed Sheeran"} />
				<GuessInput
					value={guessText}
					onChange={(text) => setGuessText(text)}
				/>
				<GuessHistory result={"unanswered"} />
				<GuessHistory result={"unanswered"} /> */}
			</div>
		</div>
	);
};

export default OriginalGame;
