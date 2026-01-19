import { useContext } from "react";
import CloseIcon from "../../../icons/CloseIcon";
import { UserContext } from "../../../context/UserContext";
import CircularPlayButton from "../../simple/CircularPlayButton";
import Button from "../../simple/Button";
import GuessHistory from "../../simple/GuessHistory";
import type { InstructionProps } from "../../../types";

const ClassicHTP = ({ onClick }: InstructionProps) => {
	const { noOfGuesses } = useContext(UserContext);
	return (
		<div className="whitespace-nowrap relative flex flex-col items-center justify-center gap-6 p-12 bg-neutral-950 rounded-3xl shadow-2xl shadow-primary-950/60">
			<button
				onClick={onClick}
				className="absolute top-6 right-6 w-8 h-8 text-neutral-50"
			>
				<CloseIcon />
			</button>
			<span className="dm-sans-400 text-primary-500 font-bold text-5xl">
				How to Play
			</span>
			<div className="w-fit flex flex-col items-center justify-center gap-4 lato-regular text-neutral-50 text-[18px]">
				<div>
					<p>
						You have{" "}
						<span className="text-accent-300 font-bold">
							{noOfGuesses}
						</span>{" "}
						attempts to guess the song.
					</p>
					<p>
						The song starts with a{" "}
						<span className="text-accent-300 font-bold">
							short audio clip
						</span>
						.
					</p>
				</div>
				<CircularPlayButton
					percentage={95}
					isPlaying={false}
					color="text-primary-500"
				/>
				<div className="flex flex-col items-center justify-center">
					<p>
						You may{" "}
						<span className="text-accent-300 font-bold">skip</span>{" "}
						a guess if you are unsure.
					</p>
					<p>Skipped attempts count towards your total attempts.</p>
				</div>
				<Button text="Skip" type="secondary" />
				<div>Each wrong guess or skip reveals more of the song.</div>
				<GuessHistory
					result="incorrect"
					text="All I Want For Christmas is You"
				/>
			</div>
		</div>
	);
};

export default ClassicHTP;
