import { useState } from "react";
import MusicPlayer from "../components/compound/MusicPlayer";
import GuessInput from "../components/simple/GuessInput";
import GuessHistory from "../components/simple/GuessHistory";

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
			<GuessHistory result={"correct"} text={"Ed Sheeran"} />
		</div>
	);
};

export default Game;
