import type { IconProps } from "../types";

const SignInIcon = ({ className = "" }: IconProps) => {
	return (
		// <svg
		// 	// width="64"
		// 	// height="38"
		// 	viewBox="0 0 64 38"
		// 	fill="none"
		// 	xmlns="http://www.w3.org/2000/svg"
		// 	className={className}
		// >
		// 	<path
		// 		d="M31.6299 3.43652C31.6299 1.54434 33.6332 0.40944 35.2031 1.32812L61.8027 16.8916C63.3993 17.826 63.3992 20.174 61.8027 21.1084L35.2031 36.6719C33.6333 37.5905 31.6302 36.4563 31.6299 34.5645V20.8408L30.125 21.7217L4.57324 36.6719C3.00314 37.5906 1.00032 36.4563 1 34.5645V3.43652C1 1.54433 3.00305 0.409381 4.57324 1.32812L30.125 16.2783L31.6299 17.1592V3.43652Z"
		// 		stroke="currentColor"
		// 		strokeWidth="2"
		// 	/>
		// </svg>
		<svg
			// width="72"
			// height="72"
			viewBox="0 0 72 72"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M36 30C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6C29.3726 6 24 11.3726 24 18C24 24.6274 29.3726 30 36 30Z"
				stroke="#A9B4F8"
				strokeWidth="6"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M63 66C63 51.0883 50.9117 39 36 39C21.0883 39 9 51.0883 9 66"
				stroke="#A9B4F8"
				strokeWidth="6"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default SignInIcon;
