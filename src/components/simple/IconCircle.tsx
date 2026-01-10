import type { JSX } from "react";
import React from "react";

type IconCircleProps = {
	children: JSX.Element;
};

const IconCircle = ({ children }: IconCircleProps) => {
	return (
		<div className="bg-accent-700/30 w-16 h-16 rounded-full relative">
			{React.cloneElement(children, {
				className: `w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent-400 cursor-pointer ${children.props.className || ""}`,
			})}
		</div>
	);
};

export default IconCircle;
