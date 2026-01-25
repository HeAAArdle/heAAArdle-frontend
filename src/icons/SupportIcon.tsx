import type { IconProps } from "../types";

const SupportIcon = ({ className = "" }: IconProps) => {
	return (
		<svg
			// width="72"
			// height="72"
			viewBox="0 0 72 72"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M31.5 9H13.5C11.0147 9 9 11.0147 9 13.5V46.5C9 48.9854 11.0147 51 13.5 51H58.5C60.9854 51 63 48.9854 63 46.5V31.5"
				stroke="currentColor"
				strokeWidth="6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M36 51V63"
				stroke="currentColor"
				strokeWidth="6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M48 9L42 15L48 21"
				stroke="currentColor"
				strokeWidth="6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M57 9L63 15L57 21"
				stroke="currentColor"
				strokeWidth="6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 63H51"
				stroke="currentColor"
				strokeWidth="6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default SupportIcon;
