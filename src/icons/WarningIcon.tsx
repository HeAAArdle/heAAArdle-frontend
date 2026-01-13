import type { IconProps } from "../types";

const WarningIcon = ({ className = "" }: IconProps) => {
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
				d="M36 66C44.2842 66 51.7842 62.6421 57.2132 57.2132C62.6421 51.7842 66 44.2842 66 36C66 27.7158 62.6421 20.2158 57.2132 14.7868C51.7842 9.35787 44.2842 6 36 6C27.7158 6 20.2158 9.35787 14.7868 14.7868C9.35787 20.2158 6 27.7158 6 36C6 44.2842 9.35787 51.7842 14.7868 57.2132C20.2158 62.6421 27.7158 66 36 66Z"
				stroke="currentColor"
				strokeWidth="6"
				stroke-linejoin="round"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M36 55.5C38.0711 55.5 39.75 53.8211 39.75 51.75C39.75 49.679 38.0711 48 36 48C33.929 48 32.25 49.679 32.25 51.75C32.25 53.8211 33.929 55.5 36 55.5Z"
				fill="currentColor"
			/>
			<path
				d="M36 18V42"
				stroke="currentColor"
				strokeWidth="6"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default WarningIcon;
