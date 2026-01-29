import type { IconProps } from "../types";

const PlayIcon = ({ className = "" }: IconProps) => {
	return (
		<svg
			// width="96"
			// height="96"
			viewBox="0 0 96 96"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<circle
				cx="48"
				cy="48"
				r="43.5"
				fill="#13161b"
				stroke="currentColor"
				strokeWidth="6"
			/>
			<path
				d="M64.8837 44.2558L41.4962 28.6641C38.5057 26.6704 34.5 28.8142 34.5 32.4083V63.5917C34.5 67.1858 38.5057 69.3296 41.4962 67.3359L64.8837 51.7442C67.5555 49.963 67.5555 46.037 64.8837 44.2558Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default PlayIcon;
