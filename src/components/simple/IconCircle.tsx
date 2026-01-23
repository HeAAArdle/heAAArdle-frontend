import type { JSX } from "react";
import React from "react";

type IconCircleProps = {
	isSelected: boolean;
	children: JSX.Element;
	onClick?: () => void;
};

const IconCircle = ({ isSelected, children, onClick }: IconCircleProps) => {
	return (
		<div
			onClick={onClick}
			className={`group w-16 h-16 rounded-full relative ${isSelected ? "bg-accent-700/30" : "border-2 border-accent-500/60 hover:border-accent-500"}`}
		>
			{React.cloneElement(children, {
				className: `w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer ${isSelected ? "text-accent-300" : "text-accent-500/60 group-hover:text-accent-500"} ${children.props.className || ""}`,
			})}
		</div>
	);
};

export default IconCircle;
