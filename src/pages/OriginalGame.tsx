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
import type { GameMode } from "../types";
import dateFormatter from "../utils/dateFormatter";

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

    // basic err stuff TODO
    if (isWsPending) return <p>Starting game...</p>;

    if (wsError) return <p>Failed to start game</p>;

    return (
        <>
            <div className="flex flex-col items-center justify-center h-full space-y-7.5">
                {mode === "original" ? (
                    <h1 className="display-m bg-linear-to-r from-primary-500 to-accent-300 bg-clip-text text-transparent">
                        HeAAArdle
                    </h1>
                ) : (
                    <h1 className="display-m text-neutral-50">
                        {header === "Today" ? header : dateFormatter(header)}'s
						{" "}
                        <span className="bg-linear-to-r from-primary-500 to-accent-300 bg-clip-text text-transparent">
                            HeAAArdle
                        </span>
                    </h1>
                )}

                <div className="flex flex-col items-center justify-center w-132">
                    {audio && startAt != null && (
                        <MusicPlayer
                            src={audio}
                            startTime={startAt}
                            clipDuration={lengthOfAudio[attempts]}
                        />
                    )}

                    <div className="flex flex-col w-24 mt-2 mb-10 gap-4">
                        <Button
                            text="Skip"
                            onClick={handleSkip}
                            variant="skip"
                            full={false}
                        />
                    </div>

                    <div className="w-full space-y-3">
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
                                    text={""}
                                />
                            ) : (
                                <GuessHistory
                                    key={index}
                                    result={
                                        gameEvent?.is_correct &&
                                        index === currGuess
                                            ? "correct"
                                            : "incorrect"
                                    }
                                    text={
                                        guess === "SKIPPED_GUESS"
                                            ? "Skipped"
                                            : guess
                                    }
                                />
                            ),
                        )}
                    </div>
                </div>
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
        </>
    );
};

export default OriginalGame;
