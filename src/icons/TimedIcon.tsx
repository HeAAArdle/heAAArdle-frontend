import type { IconProps } from "../types";

const TimedIcon = ({ className = "" }: IconProps) => {
	return (
		<svg
			// width="64"
			// height="38"
			viewBox="0 0 64 38"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M31.6299 3.43652C31.6299 1.54434 33.6332 0.40944 35.2031 1.32812L61.8027 16.8916C63.3993 17.826 63.3992 20.174 61.8027 21.1084L35.2031 36.6719C33.6333 37.5905 31.6302 36.4563 31.6299 34.5645V20.8408L30.125 21.7217L4.57324 36.6719C3.00314 37.5906 1.00032 36.4563 1 34.5645V3.43652C1 1.54433 3.00305 0.409381 4.57324 1.32812L30.125 16.2783L31.6299 17.1592V3.43652Z"
				stroke="currentColor"
				stroke-width="2"
			/>
		</svg>
	);
};

export default TimedIcon;
