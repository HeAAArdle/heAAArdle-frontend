import type { IconProps } from "../types";

const CloseIcon = ({ className = "" }: IconProps) => {
	return (
		<svg
			// width="32"
			// height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M5.33331 5.33325L26.6666 26.6666"
				stroke="currentColor"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.33331 26.6666L26.6666 5.33325"
				stroke="currentColor"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default CloseIcon;
