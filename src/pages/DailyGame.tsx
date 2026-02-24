import { useState } from "react";
import MusicPlayer from "../components/compound/MusicPlayer";
import Button from "../components/simple/Button";
import GuessHistory from "../components/simple/GuessHistory";
import GuessInput from "../components/simple/GuessInput";
import { useParams } from "react-router-dom";
import dateFormatter from "../utils/dateFormatter";

const DailyGame = () => {
	const [text, setText] = useState("");
	const { date } = useParams<{ date: string }>();
	const header = date ?? "Today";

	const handleText = (text: string) => {
		setText(text);
	};

	return (
		<div className="h-full flex flex-col space-y-4 items-center justify-center">
			<span className="dm-sans-400 font-bold text-8xl text-white mb-8">
				{header === "Today" ? header : dateFormatter(header)}'s{" "}
				<span className="bg-linear-to-r from-primary-500 to-accent-300 bg-clip-text text-transparent">
					HeAAArdle
				</span>
			</span>
			<MusicPlayer />
			<Button text="Skip" variant="secondary" />
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

export default DailyGame;
