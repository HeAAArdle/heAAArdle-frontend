import { useState } from "react";
import MusicPlayer from "../components/compound/MusicPlayer";
import GuessInput from "../components/simple/GuessInput";

const RapidGame = () => {
	const [text, setText] = useState("");

	const handleText = (text: string) => {
		setText(text);
	};
	return (
		<div className="h-full relative flex flex-col space-y-4 items-center justify-center">
			<span className="dm-sans-400 absolute top-64 font-bold text-8xl text-white mb-8">
				<span className="bg-linear-to-r from-primary-500 to-accent-300 bg-clip-text text-transparent">
					Heardle
				</span>{" "}
				(Rapid)
			</span>
			<MusicPlayer />
			<div className="w-132 space-y-4">
				<GuessInput value={text} onChange={handleText} />
			</div>
		</div>
	);
};

export default RapidGame;
