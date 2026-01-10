import { useState } from "react";
import MusicPlayer from "../components/compound/MusicPlayer";
import GuessInput from "../components/simple/GuessInput";
import GuessHistory from "../components/simple/GuessHistory";
import TextInput from "../components/simple/TextInput";
import Button from "../components/simple/Button";
import StatsOriginal from "../components/simple/Statistics";
import HelpIcon from "../icons/HelpIcon";
import LeaderboardFilter from "../components/simple/LeaderboardFilter";

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
		<div className="h-full flex flex-col space-y-4 bg-primary-950 items-center justify-center">
			<MusicPlayer />
			<Button text="Skip" />
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

export default Game;
