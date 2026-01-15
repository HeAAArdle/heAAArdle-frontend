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
				{/* <DeleteAccount /> */}
				<GuessInput value={text} onChange={setText} onClick={() => 1} />
				<Leaderboard />
				<Statistics
					currentStreak={69}
					longestStreak={69}
					gamesPlayed={69}
					winCount={69}
					winRate={100}
					type="original"
				/>
				<Statistics
					currentStreak={69}
					longestStreak={69}
					gamesPlayed={69}
					winCount={69}
					winRate={100}
					type="daily"
					distribution={[6, 5, 4, 3, 6, 7, 1]}
				/>
				{/* <PasswordInput isSignIn={true} register={(a)=>"")} />
				<PasswordInput isSignIn={false} register={a=>""} /> */}
			</div>
		</div>
	);
};

export default Test;
