import { useState } from "react";
import MusicPlayer from "../components/compound/MusicPlayer";
import GuessInput from "../components/simple/GuessInput";
import GuessHistory from "../components/simple/GuessHistory";
import TextInput from "../components/simple/TextInput";
import Button from "../components/simple/Button";

const Game = () => {
	const [text, setText] = useState("");
	const [random, setRandom] = useState("");

	const handleText = (text: string) => {
		setText(text);
	};

	const onChangeTemp = (text: string) => {
		setRandom(text);
	};

	return (
		<div>
			<MusicPlayer />
			{text}
			<GuessInput value={text} onChange={handleText} />
			<GuessHistory result={"correct"} text={"Ed Sheeran"} />
			<GuessHistory result={"incorrect"} text={"Taylor Swift"} />
			<TextInput
				value={random}
				onChange={onChangeTemp}
				placeholder="Password"
			/>
			<Button text="Button" type="primary" />
			<Button text="Button" type="secondary" />
			<Button text="Button" type="destructive" />
		</div>
	);
};

export default Game;
