import type { IconProps } from "../types";

const RightArchiveIcon = ({ className = "" }: IconProps) => {
	return (
		<svg
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M12 7.5L19.5 15L12 22.5"
				stroke="currentColor"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default RightArchiveIcon;
