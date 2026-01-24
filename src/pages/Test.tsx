import { useState } from "react";
import ClassicHTP from "../components/compound/howToPlay/ClassicHTP";
import Leaderboard from "../components/compound/Leaderboard";
import Statistics from "../components/modals/Statistics";
import Support from "../components/modals/Support";
import Archive from "../components/simple/Archive";

const Test = () => {
	const [text, setText] = useState("");

	return (
		<div className="h-full flex items-center justify-center w-full">
			<div className="h-full flex flex-col items-center justify-center w-96 gap-4">
				<Archive />
			</div>
		</div>
	);
};

export default Test;
