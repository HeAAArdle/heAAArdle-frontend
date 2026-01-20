import { useEffect, useState } from "react";
import PauseIcon from "../../icons/PauseIcon";
import PlayIcon from "../../icons/PlayIcon";

type CircularPlayButtonProps = {
	percentage: number;
	isPlaying: boolean;
	size?: number;
	strokeWidth?: number; // thickness of line
	color: string;
};

const CircularPlayButton = ({
	percentage,
	isPlaying,
	size = 96,
	strokeWidth = 4,
	color,
}: CircularPlayButtonProps) => {
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference * (1 - percentage / 100);

	const iconSize = size * 0.85;

	return (
		<div
			className="relative inline-block cursor-pointer group"
			style={{ width: size, height: size }}
		>
			{(percentage < 100 || percentage === 0) && (
				<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
					{/* Progress circle */}
					<circle
						cx={size / 2}
						cy={size / 2}
						r={radius}
						className={`${color} stroke-current group-hover:text-accent-500 transition-colors duration-300`}
						strokeWidth={strokeWidth}
						fill="none"
						strokeDasharray={circumference}
						strokeDashoffset={offset}
						strokeLinecap="round"
						transform={`rotate(-90 ${size / 2} ${size / 2})`}
						style={{
							transitionProperty: "stroke-dashoffset",
							transitionDuration: "0.3s",
							transitionTimingFunction: "linear",
						}}
					/>
				</svg>
			)}
			{/* Icon */}
			<div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				style={{ width: iconSize, height: iconSize }}
			>
				{isPlaying ? (
					<PauseIcon className="w-full h-full text-primary-500 group-hover:text-accent-500 transition-colors duration-300" />
				) : (
					<PlayIcon className="w-full h-full text-primary-500 group-hover:text-accent-500 transition-colors duration-300" />
				)}
			</div>
		</div>
	);
};

export default CircularPlayButton;
