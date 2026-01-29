import type { IconProps } from "../types";

const PauseIcon = ({ className = "" }: IconProps) => {
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
			<rect
				x="33"
				y="28.5"
				width="9"
				height="39"
				rx="4.5"
				fill="currentColor"
			/>
			<rect
				x="54"
				y="28.5"
				width="9"
				height="39"
				rx="4.5"
				fill="currentColor"
			/>
		</svg>
	);
};

export default PauseIcon;
