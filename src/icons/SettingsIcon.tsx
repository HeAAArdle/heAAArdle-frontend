import type { IconProps } from "../types";

const SettingsIcon = ({ className = "" }: IconProps) => {
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
				d="M31 31C31 23.5442 24.2843 17.5 16 17.5C7.71575 17.5 1 23.5442 1 31M22.6667 7C22.6667 10.3137 19.6819 13 16 13C12.3181 13 9.33333 10.3137 9.33333 7C9.33333 3.68629 12.3181 1 16 1C19.6819 1 22.6667 3.68629 22.6667 7Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default SettingsIcon;
