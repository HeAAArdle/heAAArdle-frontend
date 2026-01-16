import { useState } from "react";
import GuessInput from "../components/simple/GuessInput";
import Leaderboard from "./Leaderboard";
import Statistics from "../components/simple/Statistics";
import PasswordInput from "../components/simple/PasswordInput";

const Test = () => {
	const [text, setText] = useState("");

	return (
		<div className="h-full flex items-center justify-center w-full">
			<div className="h-full flex flex-col items-center justify-center w-96 gap-4">
				<Statistics
					currentStreak={69}
					longestStreak={69}
					gamesPlayed={69}
					winCount={69}
					winRate={69}
					type="daily"
					distribution={[8, 5, 4, 2, 7, 9]}
				/>
			</div>
		</div>
	);
};

export default Test;
