import CloseIcon from "../../icons/CloseIcon";
import Button from "../simple/Button";
import PopUpOverlay from "./PopUpOverlay";

type ResultProps = {
    hasWon: boolean;
    attempts: number;
    title: string;
    artist: string;
    album: string;
    videoLink: string;
    onClick: () => void;
    guesses: (string | null)[];
};

const Result = ({
    hasWon,
    attempts,
    title,
    artist,
    album,
    videoLink,
    onClick,
    guesses,
}: ResultProps) => {
    const [header, buttonText] = (() => {
        if (hasWon) {
            return ["Congratulations!", "Share Your Results"];
        } else {
            return ["Better luck next time.", "Share Today's Attempt"];
        }
    })();

    return (
        <>
            <PopUpOverlay />

            <div className="fixed top-1/2 left-1/2 z-60 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="relative flex flex-col items-center justify-center p-12 gap-6 text-neutral-50 bg-neutral-950 rounded-3xl body-l-r">
                    <button
                        onClick={() => onClick()}
                        className="cursor-pointer"
                    >
                        <CloseIcon className="absolute text-neutral-50 w-8 h-8 top-6 right-6" />
                    </button>
	
                    <div className="w-full flex flex-col items-center justify-center gap-2">
                        <h2 className="text-primary-500 heading-m">
                            {header}
                        </h2>

                        {hasWon ? (
                            <div>
                                You guessed the song in{" "}
                                <span className="text-accent-300">
                                    {attempts}
                                </span>{" "}
                                attempt{attempts > 1 ? "s" : ""}.
                            </div>
                        ) : (
                            "Think you'll get tomorrow's?"
                        )}
                    </div>
		
                    <div className="flex flex-col gap-2 items-center justify-center">
                        Give the song another listen:
                        <EmbeddedVideo url={videoLink} />
                        <div className="flex flex-col items-center justify-center lato-regular text-[16px] text-neutral-400">
                            <span className="text-primary-500 dm-sans-400 font-bold text-3xl">
                                {title}
                            </span>
                            <span className="lato-bold text-[18px]">
                                {artist}
                            </span>
                            {album}
                        </div>
                    </div>
                    <Button
                        text={buttonText}
                        variant="primary"
                        onClick={() => shareString(guesses)}
                    />
                </div>
            </div>
        </>
    );
};

type Props = {
    url: string;
};

const EmbeddedVideo = ({ url }: Props) => (
    <iframe
        className="w-136 aspect-video rounded-lg"
        src={url}
        allowFullScreen
    />
);

export default Result;

const shareString = (guesses: (string | null)[]) => {
    const symbols = [];
    for (const guess of guesses) {
        if (guess === null) symbols.push("⬜️");
        else if (guess) {
            //
        }
    }
};
