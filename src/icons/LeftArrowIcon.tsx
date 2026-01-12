import type { IconProps } from "../types";

const LeftArrowIcon = ({ className = "" }: IconProps) => {
	return (
		<svg
			// width="48"
			// height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M5.79889 24H41.7989"
				stroke="currentColor"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M17.7988 36L5.79883 24L17.7988 12"
				stroke="currentColor"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default LeftArrowIcon;
