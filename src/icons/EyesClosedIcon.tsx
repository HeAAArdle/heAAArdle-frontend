import type { IconProps } from "../types";

const EyesClosedIcon = ({ className = "" }: IconProps) => {
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
				d="M12.35 12.35C11.9815 12.6933 11.686 13.1073 11.4811 13.5673C11.2761 14.0273 11.1659 14.5238 11.157 15.0274C11.1481 15.5309 11.2408 16.031 11.4294 16.498C11.618 16.9649 11.8987 17.3891 12.2548 17.7452C12.6109 18.1013 13.035 18.382 13.502 18.5706C13.9689 18.7592 14.4691 18.8518 14.9726 18.8429C15.4761 18.834 15.9727 18.7238 16.4327 18.5189C16.8927 18.3139 17.3067 18.0184 17.65 17.65"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.4125 6.35C13.9391 6.28439 14.4693 6.25099 15 6.25C23.75 6.25 27.5 15 27.5 15C26.9411 16.1964 26.2402 17.3212 25.4125 18.35"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.2625 8.26245C5.77656 9.95573 3.78734 12.2815 2.5 15C2.5 15 6.25 23.75 15 23.75C17.3949 23.7564 19.7385 23.0563 21.7375 21.7374"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.5 2.5L27.5 27.5"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default EyesClosedIcon;
