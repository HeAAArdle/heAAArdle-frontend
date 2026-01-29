import MusicPlayer from "../components/compound/MusicPlayer";
import GuessInput from "../components/simple/GuessInput";
import GuessHistory from "../components/simple/GuessHistory";
import Button from "../components/simple/Button";
import useHeardleGame from "../hooks/useHeardleGame";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useGameEvent } from "../hooks/server-data/useGameEvent";
import { useGameResult } from "../hooks/server-data/useGameResult";
import { artistFormatter } from "../utils/artistFormatter";
import Result from "../components/modals/Result";
import { useParams } from "react-router-dom";
import dateFormatter from "../utils/dateFormatter";
import type { GameMode } from "../types";

type GameProps = {
	mode: GameMode;
};

const OriginalGame = ({ mode }: GameProps) => {
	const { lengthOfAudio } = useContext(UserContext);
	const { date } = useParams<{ date: string }>();
	const header = date ?? "Today";

	const {
		isWsPending,
		wsError,
		guessText,
		setGuessText,
		guesses,
		currGuess,
		isGameDone,
		handleGuess,
		handleSkip,
		audio,
		startAt,
		handleNewGame,
	} = useHeardleGame(mode, date ? date : null);

	const { data: gameEvent } = useGameEvent(mode, date ? date : null);
	const { data: gameResult } = useGameResult(mode, date ? date : null);

	const attempts = gameEvent?.attempts ?? 0;

	// basic err stuff
	if (isWsPending) return <p>Starting game...</p>;
	if (wsError) return <p>Failed to start game</p>;

	return (
		<div className="relative h-full flex flex-col space-y-4 items-center justify-center">
			{mode === "original" ? (
				<span className="dm-sans-400 font-bold text-8xl bg-linear-to-r from-primary-500 to-accent-300 bg-clip-text text-transparent mb-8">
					HeAAArdle
				</span>
			) : (
				<span className="dm-sans-400 font-bold text-8xl text-white mb-8">
					{header === "Today" ? header : dateFormatter(header)}'s{" "}
					<span className="bg-linear-to-r from-primary-500 to-accent-300 bg-clip-text text-transparent">
						HeAAArdle
					</span>
				</span>
			)}
			{audio && startAt != null && (
				<MusicPlayer
					src={audio}
					startTime={startAt}
					clipDuration={lengthOfAudio[attempts]}
				/>
			)}
			<Button text="Skip" type="skip" onClick={handleSkip} />
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
								gameEvent?.is_correct && index === currGuess
									? "correct"
									: "incorrect"
							}
							text={guess}
						/>
					),
				)}
			</div>
			{gameResult && gameEvent && (
				<Result
					hasWon={gameEvent?.is_correct}
					attempts={attempts}
					title={gameResult.title}
					artist={artistFormatter(
						gameResult.artists,
						gameResult.artists.length,
					)}
					album={gameResult.album}
					videoLink={gameResult.shareLink}
					onClick={() => handleNewGame(mode, date ? date : null)}
				/>
			)}
		</div>
	);
};

export default OriginalGame;
