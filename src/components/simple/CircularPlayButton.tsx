import PauseIcon from "../../icons/PauseIcon";
import PlayIcon from "../../icons/PlayIcon";

type CircularPlayButtonProps = {
    percentage: number;
    isPlaying: boolean;
    size?: number;
    strokeWidth?: number; // thickness of line
    color: string;
};

const ICON_CLASS =
    "w-full h-full text-primary-500 group-hover:text-accent-500 transition-standard";

const CircularPlayButton = ({
    percentage,
    isPlaying,
    size = 96,
    strokeWidth = 4,
    color,
}: CircularPlayButtonProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - percentage / 100);

    const iconSize = size * 0.85;

    return (
        <div
            className="relative inline-block cursor-pointer group"
            style={{ width: size, height: size }}
        >
            {/* Progress Circle */}
            {percentage < 100 || percentage === 0 ? (
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        transform={`rotate(-90 ${size / 2} ${size / 2})`}
                        className={`${color} stroke-current group-hover:text-accent-500`}
                        style={{
                            transitionProperty: "stroke-dashoffset",
                            transitionDuration: "0.3s",
                            transitionTimingFunction: "linear",
                        }}
                    />
                </svg>
            ) : null}

            {/* Icon */}
            <div
                className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ width: iconSize, height: iconSize }}
            >
                {isPlaying ? (
                    <PauseIcon className={ICON_CLASS} />
                ) : (
                    <PlayIcon className={ICON_CLASS} />
                )}
            </div>
        </div>
    );
};

export default CircularPlayButton;
