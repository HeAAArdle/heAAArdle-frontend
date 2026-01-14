import MusicPlayer from "../components/compound/MusicPlayer";
import GuessInput from "../components/simple/GuessInput";
import GuessHistory from "../components/simple/GuessHistory";
import Button from "../components/simple/Button";
import { useSongs } from "../services/api/song/get-songs";
import useHeardleGame from "../hooks/useHeardleGame";

const OriginalGame = () => {
	const { SONGS } = useSongs();

	const {
		isWsPending,
		wsError,
		guessText,
		setGuessText,
		guesses,
		currGuess,
		hasWon,
		handleGuess,
		handleSkip,
	} = useHeardleGame("original");

	// basic err stuff
	if (isWsPending) return <p>Starting game...</p>;
	if (wsError) return <p>Failed to start game</p>;

	return (
		<div className="h-full flex flex-col space-y-4 items-center justify-center">
			<span className="dm-sans-400 font-bold text-8xl bg-linear-to-r from-primary-500 to-accent-300 bg-clip-text text-transparent mb-8">
				Heardle
			</span>
			<MusicPlayer />
			<Button text="Skip" type="secondary" onClick={handleSkip} />
			<div className="w-132 space-y-4">
				{guesses.map((guess, index) =>
					index === currGuess && !hasWon ? (
						<GuessInput
							key={index}
							value={guessText}
							onChange={(text) => setGuessText(text)}
							onClick={handleGuess}
						/>
					) : guess === null ? (
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
