import { cloneElement, type JSX } from "react";

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
    const circleClasses = isSelected
        ? `border-2 border-transparent ${circleActiveColor}`
        : `border-2 ${circleInactiveColor} ${circleInactiveHoverColor}`;

    const iconClasses = isSelected
        ? iconActiveColor
        : `${iconInactiveColor} ${iconInactiveHoverColor}`;

    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={isSelected}
            className={`relative flex items-center justify-center w-16 aspect-square rounded-full cursor-pointer transition-standard focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed group ${circleClasses}`}
        >
            {cloneElement(children, {
                className: `w-8 h-8 ${iconClasses} transition-standard ${children.props.className ?? ""}`,
            })}
        </button>
    );
};

export default IconCircle;
