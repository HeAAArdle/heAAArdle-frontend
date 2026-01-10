import PauseIcon from "../../icons/PauseIcon";
import PlayIcon from "../../icons/PlayIcon";

type CircularPlayButtonProps = {
	percentage: number;
	isPlaying: boolean;
	size?: number;
	strokeWidth?: number; // thickness of line
	color: string;
	trackColor: string;
};

const CircularPlayButton = ({
	percentage,
	isPlaying,
	size = 96,
	strokeWidth = 4,
	color,
	trackColor,
}: CircularPlayButtonProps) => {
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference * (1 - percentage / 100);

	const iconSize = size * 0.85;

	return (
		<div
			className="relative inline-block cursor-pointer"
			style={{ width: size, height: size }}
		>
			<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
				{/* Track circle */}
				{/* <circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					className={`${trackColor} stroke-current`}
					strokeWidth={strokeWidth}
					fill="none"
				/> */}
				{/* Progress circle */}
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					className={`${color} stroke-current`}
					strokeWidth={strokeWidth}
					fill="none"
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					strokeLinecap="round"
					transform={`rotate(-90 ${size / 2} ${size / 2})`}
					style={{ transition: "stroke-dashoffset 0.5s ease" }}
				/>
			</svg>
			{/* Icon */}
			<div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				style={{ width: iconSize, height: iconSize }}
			>
				{isPlaying ? (
					<PauseIcon className="w-full h-full text-primary-500 hover:text-accent-500" />
				) : (
					<PlayIcon className="w-full h-full text-primary-500 hover:text-accent-500" />
				)}
			</div>
		</div>
	);
};

export default CircularPlayButton;
