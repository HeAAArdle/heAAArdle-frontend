import { useState } from "react";
import MusicPlayer from "../components/compound/MusicPlayer";
import GuessInput from "../components/simple/GuessInput";
import GuessHistory from "../components/simple/GuessHistory";
import Button from "../components/simple/Button";

const OriginalGame = () => {
	const [text, setText] = useState("");

	const handleText = (text: string) => {
		setText(text);
	};

	return (
		<div className="h-full flex flex-col space-y-4 items-center justify-center">
			<span className="dm-sans-400 font-bold text-8xl bg-linear-to-r from-primary-500 to-accent-300 bg-clip-text text-transparent mb-8">
				Heardle
			</span>
			<MusicPlayer />
			<Button text="Skip" type="secondary" />
			<div className="w-132 space-y-4">
				<GuessHistory result={"incorrect"} text={"Taylor Swift"} />
				<GuessHistory result={"incorrect"} text={"Taylor Swift"} />
				<GuessHistory result={"correct"} text={"Ed Sheeran"} />
				<GuessInput value={text} onChange={handleText} />
				<GuessHistory result={"unanswered"} />
				<GuessHistory result={"unanswered"} />
			</div>
		</div>
	);
};

export default OriginalGame;
