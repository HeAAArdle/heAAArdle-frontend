import MusicPlayer from "../components/compound/MusicPlayer";
import GuessInput from "../components/simple/GuessInput";
import GuessHistory from "../components/simple/GuessHistory";
import Button from "../components/simple/Button";
import useHeardleGame from "../hooks/useHeardleGame";
import type { StartGameData } from "../services/api/game/start-game";
import { useQuery } from "@tanstack/react-query";

const OriginalGame = () => {
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
		audio,
		startAt,
	} = useHeardleGame("original");

	// const { data: wsData } = useQuery<StartGameData | null>({
	// 	queryKey: ["gameStart"],
	// 	queryFn: () => null,
	// 	// will only run if not in cache
	// 	staleTime: Infinity,
	// 	initialData: null,
	// });

	// const audio = wsData?.audio;
	// const startAt = wsData?.startAt;

	// basic err stuff
	if (isWsPending) return <p>Starting game...</p>;
	if (wsError) return <p>Failed to start game</p>;

	console.log(audio);
	console.log(startAt);

	return (
		<div className="h-full flex flex-col space-y-4 items-center justify-center">
			<span className="dm-sans-400 font-bold text-8xl bg-linear-to-r from-primary-500 to-accent-300 bg-clip-text text-transparent mb-8">
				Heardle
			</span>
			{audio && startAt != null && (
				<MusicPlayer
					src={audio}
					startTime={startAt}
					clipDuration={16}
				/>
			)}
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
