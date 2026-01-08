import { useState } from "react";
import MusicPlayer from "../components/compound/MusicPlayer";
import GuessInput from "../components/simple/GuessInput";

const Game = () => {
	const [text, setText] = useState("");

	const handleText = (text: string) => {
		setText(text);
	};

	return (
		<div>
			<MusicPlayer />
			{text}
			<GuessInput value={text} onChange={handleText} />
		</div>
	);
};

export default Game;
