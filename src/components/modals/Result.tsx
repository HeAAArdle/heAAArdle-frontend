import type { UseMutateFunction } from "@tanstack/react-query";
import CloseIcon from "../../icons/CloseIcon";
import type {
	StartGameData,
	StartGameInput,
} from "../../services/api/game/start-game";
import Button from "../simple/Button";

type ResultProps = {
	hasWon: boolean;
	attempts: number;
	title: string;
	artist: string;
	album: string;
	videoLink: string;
	onClick: UseMutateFunction<StartGameData, Error, StartGameInput, unknown>;
};

const Result = ({
	hasWon,
	attempts,
	title,
	artist,
	album,
	videoLink,
	onClick,
}: ResultProps) => {
	const [header, buttonText] = (() => {
		if (hasWon) {
			return ["Congratulations!", "Share Your Results"];
		} else {
			return ["Better luck next time.", "Share Today's Attempt"];
		}
	})();

	return (
		<div className="absolute flex items-center justify-center z-10">
			<div className="relative flex flex-col items-center justify-center p-12 gap-6 text-neutral-50 bg-neutral-950 rounded-3xl text-[16px] lato-regular">
				<button
					onClick={() => onClick({ mode: "original", date: null })}
					className="cursor-pointer"
				>
					<CloseIcon className="absolute text-neutral-50 w-8 h-8 top-6 right-6" />
				</button>
				<div className="w-full text-[18px] flex flex-col items-center justify-center gap-2">
					<span className="text-primary-500 dm-sans-400 font-bold text-4xl">
						{header}
					</span>
					{hasWon ? (
						<div>
							You guessed the song in{" "}
							<span className="text-accent-300">{attempts}</span>{" "}
							attempts.
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
						<span className="lato-bold text-[18px]">{artist}</span>
						{album}
					</div>
				</div>
				<Button text={buttonText} type="primary" />
			</div>
		</div>
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
