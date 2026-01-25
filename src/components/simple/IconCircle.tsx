import type { JSX } from "react";
import React from "react";

type IconCircleProps = {
	isSelected: boolean;

	circleActiveColor?: string;
	circleInactiveColor?: string;
	circleInactiveHoverColor?: string;

	iconActiveColor?: string;
	iconInactiveColor?: string;
	iconInactiveHoverColor?: string;

	children: JSX.Element;
	onClick?: () => void;
};

const IconCircle = ({
	isSelected,
	circleActiveColor = "bg-accent-700/30",
	circleInactiveColor = "border-accent-500/60",
	circleInactiveHoverColor = "hover:border-accent-500",
	iconActiveColor = "text-accent-300",
	iconInactiveColor = "text-accent-500/60",
	iconInactiveHoverColor = "group-hover:text-accent-500",
	children,
	onClick,
}: IconCircleProps) => {
	return (
		<div
			onClick={onClick}
			className={`group w-16 h-16 rounded-full relative ${isSelected ? circleActiveColor : `border-2 ${circleInactiveColor} ${circleInactiveHoverColor} transition-all`}`}
		>
			{React.cloneElement(children, {
				className: `w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer ${isSelected ? iconActiveColor : `${iconInactiveColor} ${iconInactiveHoverColor} transition-all`} ${children.props.className || ""}`,
			})}
		</div>
	);
};

export default IconCircle;
