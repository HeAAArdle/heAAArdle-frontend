import type { IconProps } from "../types";

const LoginIcon = ({ className = "" }: IconProps) => {
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
				d="M15.9931 1H1.00003V31H16M16.8334 23.5L9.33339 16L16.8334 8.5M31.0001 15.9931H9.33339"
				stroke="currentColor"
				stroke-width="1.875"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default LoginIcon;
