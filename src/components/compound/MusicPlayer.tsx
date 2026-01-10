import { useEffect, useRef, useState } from "react";
import music from "../../assets/Ed Sheeran - Perfect (Official Music Video).mp3";
import CircularPlayButton from "../simple/CircularPlayButton";

const MusicPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [percentage, setPercentage] = useState(0);
	const audioRef = useRef<HTMLAudioElement>(null);

	const handleClick = () => {
		if (isPlaying) audioRef.current?.pause();
		else audioRef.current?.play();
		setIsPlaying((prev) => !prev);
	};

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const handleTimeUpdate = () => {
			setPercentage((audio.currentTime / audio.duration) * 100);
		};

		audio.addEventListener("timeupdate", handleTimeUpdate);

		return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
	}, []);

	return (
		<div>
			<audio ref={audioRef} src={music} />
			<button onClick={handleClick}>
				<CircularPlayButton
					size={96}
					isPlaying={isPlaying}
					percentage={percentage}
					color="text-primary-500"
					trackColor="text-gray-400"
				/>
			</button>
		</div>
	);
};

export default MusicPlayer;
