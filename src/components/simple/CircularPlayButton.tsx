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
    const ringPadding = 8;
    const outerSize = size + ringPadding * 2;

    const radius = (outerSize - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - percentage / 100);

    return (
        <div
            className="relative inline-block cursor-pointer group"
            style={{ width: outerSize, height: outerSize }}
        >
            {/* Progress Circle */}
            {percentage < 100 || percentage === 0 ? (
                <svg
                    width={outerSize}
                    height={outerSize}
                    viewBox={`0 0 ${outerSize} ${outerSize}`}
                >
                    <circle
                        cx={outerSize / 2}
                        cy={outerSize / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        transform={`rotate(-90 ${outerSize / 2} ${outerSize / 2})`}
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
                style={{ width: size, height: size }}
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
