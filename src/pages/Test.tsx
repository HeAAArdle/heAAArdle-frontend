import { useState } from "react";
import GuessInput from "../components/simple/GuessInput";
import Leaderboard from "../components/compound/Leaderboard";
import Statistics from "../components/simple/Statistics";
import PasswordInput from "../components/simple/PasswordInput";
import Result from "../components/simple/Result";
import Archive from "../components/simple/Archive";
import ClassicHTP from "../components/compound/howToPlay/ClassicHTP";

const Test = () => {
	const [text, setText] = useState("");

	return (
		<div className="h-full flex items-center justify-center w-full">
			<div className="h-full flex flex-col items-center justify-center w-96 gap-4">
				{/* <Archive /> */}
				<ClassicHTP />
			</div>
		</div>
	);
};

export default Test;
