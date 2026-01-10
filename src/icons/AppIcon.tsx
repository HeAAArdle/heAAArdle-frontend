import type { IconProps } from "../types";

const AppIcon = ({ className = "" }: IconProps) => {
	return (
		<svg
			// width="64"
			// height="64"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<circle
				cx="32"
				cy="32"
				r="31"
				fill="white"
				stroke="black"
				stroke-width="2"
			/>
		</svg>
	);
};

export default AppIcon;
