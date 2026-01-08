import { useState } from "react";
import CircularPlayButton from "../components/simple/CircularPlayButton";

const Game = () => {
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<div>
			Game
			<button onClick={() => setIsPlaying((prev) => !prev)}>
				<CircularPlayButton
					isPlaying={isPlaying}
					percentage={50}
					color="text-blue-500"
					trackColor="text-gray-300"
				/>
			</button>
		</div>
	);
};

export default Game;
