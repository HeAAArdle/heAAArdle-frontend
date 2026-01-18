import type { IconProps } from "../types";

const LeftArchiveIcon = ({ className = "" }: IconProps) => {
	return (
		<svg
			// width="30"
			// height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M17.5 22.5L10 15L17.5 7.5"
				stroke="currentColor"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default LeftArchiveIcon;
