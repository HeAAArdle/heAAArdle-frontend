import { useState } from "react";
import MusicPlayer from "../components/compound/MusicPlayer";

const Test = () => {
	const [text, setText] = useState("");

	return (
		<div className="h-full flex items-center justify-center w-full">
			<div className="h-full flex flex-col items-center justify-center w-96 gap-4">
				<MusicPlayer />
			</div>
		</div>
	);
};

export default Test;
