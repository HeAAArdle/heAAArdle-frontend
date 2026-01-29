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
    const circleStateClasses = isSelected
        ? `border-2 border-transparent ${circleActiveColor}`
        : `border-2 ${circleInactiveColor} ${circleInactiveHoverColor}`;

    const iconStateClasses = isSelected
        ? iconActiveColor
        : `${iconInactiveColor} ${iconInactiveHoverColor}`;

    return (
        <button
            type="button"
            onClick={onClick}
            className={`group w-16 h-16 rounded-full relative flex items-center justify-center focus:outline-none transition-standard disabled:opacity-60 disabled:cursor-not-allowed 
				${circleStateClasses}
			`}
            aria-pressed={isSelected}
        >
            {React.cloneElement(children, {
                className: `
					w-8 h-8 transition-standard
					${iconStateClasses}
					${children.props.className ?? ""}
				`,
            })}
        </button>
    );
};

export default IconCircle;
