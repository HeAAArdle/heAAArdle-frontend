import { useEffect, useRef, useState } from "react";
import CircularPlayButton from "../simple/CircularPlayButton";

type MusicPlayerType = {
	src: string; // audio url
	startTime: number;
	clipDuration: number; // how long to run
};

const MusicPlayer = ({ src, startTime, clipDuration }: MusicPlayerType) => {
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

		// random start given by backend
		audio.currentTime = startTime;

		const handleTimeUpdate = () => {
			setPercentage(
				((audio.currentTime - startTime) / clipDuration) * 100,
			);
			if (audio.currentTime >= startTime + clipDuration) {
				audio.pause();
				setIsPlaying(false);
				setPercentage(0);
				audio.currentTime = startTime;
			}
		};

		audio.addEventListener("timeupdate", handleTimeUpdate);

		return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
	}, [src, startTime, clipDuration]);

	return (
		<div>
			<audio ref={audioRef} src={src} />
			<button onClick={handleClick}>
				<CircularPlayButton
					size={96}
					isPlaying={isPlaying}
					percentage={percentage}
					color="text-primary-500"
				/>
			</button>
		</div>
	);
};

export default MusicPlayer;
