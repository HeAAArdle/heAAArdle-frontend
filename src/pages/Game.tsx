import { useState } from "react";
import MusicPlayer from "../components/compound/MusicPlayer";
import GuessInput from "../components/simple/GuessInput";
import GuessHistory from "../components/simple/GuessHistory";
import TextInput from "../components/simple/TextInput";
import Button from "../components/simple/Button";
import StatsOriginal from "../components/simple/Statistics";

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

			<StatsOriginal
				currentStreak={67}
				longestStreak={67}
				gamesPlayed={69}
				winCount={67}
				winRate={97}
				type="original"
			/>
			<StatsOriginal
				currentStreak={67}
				longestStreak={67}
				gamesPlayed={69}
				winCount={67}
				winRate={97}
				type="daily"
				distribution={[1, 2, 10, 4, 5, 6, 7]}
			/>
		</div>
	);
};

export default Game;
