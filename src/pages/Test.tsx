import { useState } from "react";
import ClassicHTP from "../components/compound/howToPlay/ClassicHTP";
import Leaderboard from "../components/compound/Leaderboard";
import Statistics from "../components/modals/Statistics";
import Support from "../components/modals/Support";

const Test = () => {
	const [text, setText] = useState("");

	return (
		<div className="h-full flex items-center justify-center w-full">
			<div className="h-full flex flex-col items-center justify-center w-96 gap-4">
				{/* <Archive /> */}
				{/* <ClassicHTP /> */}
				{/* <Leaderboard /> */}
				{/* <Statistics
					currentStreak={69}
					longestStreak={69}
					gamesPlayed={69}
					winCount={69}
					winRate={69}
					type="daily"
					distribution={[7, 8, 3, 5, 1, 5]}
				/> */}
				<Support />
			</div>
		</div>
	);
};

export default Test;
