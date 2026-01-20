import MusicPlayer from "../components/compound/MusicPlayer";
import GuessInput from "../components/simple/GuessInput";
import GuessHistory from "../components/simple/GuessHistory";
import Button from "../components/simple/Button";
import useHeardleGame from "../hooks/useHeardleGame";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useGameEvent } from "../hooks/server-data/useGameEvent";

const OriginalGame = () => {
	const { lengthOfAudio } = useContext(UserContext);
	const {
		isWsPending,
		wsError,
		guessText,
		setGuessText,
		guesses,
		currGuess,
		hasWon,
		isGameDone,
		handleGuess,
		handleSkip,
		audio,
		startAt,
	} = useHeardleGame("original");

	const { data: gameEvent } = useGameEvent();

	const attempts = gameEvent?.attempts ?? 0;

	// basic err stuff
	if (isWsPending) return <p>Starting game...</p>;
	if (wsError) return <p>Failed to start game</p>;

	return (
		<div className="h-full flex flex-col space-y-4 items-center justify-center">
			<span className="dm-sans-400 font-bold text-8xl bg-linear-to-r from-primary-500 to-accent-300 bg-clip-text text-transparent mb-8">
				Heardle
			</span>
			{audio && startAt != null && (
				<MusicPlayer
					src={audio}
					startTime={startAt}
					clipDuration={lengthOfAudio[attempts]}
				/>
			)}
			<Button text="Skip" type="secondary" onClick={handleSkip} />
			<div className="w-132 space-y-4">
				{guesses.map((guess, index) =>
					index === currGuess && !isGameDone ? (
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
							result={
								hasWon && index === currGuess
									? "correct"
									: "incorrect"
							}
							text={guess}
						/>
					),
				)}
			</div>
		</div>
	);
};

export default OriginalGame;
