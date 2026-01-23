import CloseIcon from "../../icons/CloseIcon";
import FireIcon from "../../icons/FireIcon";

type StatType = "original" | "daily";

type ScoreDistribution = [number, number, number, number, number, number];

type StatisticsProps = {
	currentStreak: number;
	longestStreak: number;
	gamesPlayed: number;
	winCount: number;
	winRate: number;
	type: StatType;
	distribution: ScoreDistribution;
	onClick: () => void;
};

const Statistics = ({
	currentStreak,
	longestStreak,
	gamesPlayed,
	winCount,
	winRate,
	type,
	distribution,
	onClick,
}: StatisticsProps) => {
	const stats = {
		gamesPlayed: gamesPlayed,
		winCount: winCount,
		lostCount: gamesPlayed - winCount,
	};

	return (
		<div className="relative bg-neutral-950 flex flex-col py-12 items-center rounded-3xl px-12 gap-4 w-5xl">
			<button onClick={onClick}>
				<CloseIcon className="absolute top-6 right-6 w-8 h-8 text-neutral-50 cursor-pointer" />
			</button>
			<span className="dm-sans-400 text-5xl text-primary-500 font-bold">
				Statistics
			</span>
			<div className="bg-accent-800 rounded-full px-8 py-2 mb-2 text-neutral-50 text-[16px]">
				Mode • {type.charAt(0).toUpperCase() + type.slice(1)}
			</div>

			<div className="grid grid-cols-2 gap-6 w-full">
				<div className="grid grid-rows-[3fr_4fr] gap-4 h-full">
					<div className="flex w-full bg-neutral-900 text-primary-300 rounded-xl text-[30px] dm-sans-400 font-bold py-6 px-3 gap-8 items-center justify-center">
						Win Rate
						{/* Circle Stuff */}
						<WinRateCircle
							size={128}
							winRate={winRate}
							fontColor="text-accent-300"
							bgColor="text-neutral-950"
							lineColor="text-primary-500"
						/>
					</div>

					{/* Streak */}
					<div className="flex flex-col items-center justify-center bg-neutral-900 text-primary-300 rounded-xl text-[18px] lato-regular py-6 px-9 gap-6">
						<div className="flex items-center justify-center gap-16">
							<div>
								<div className="flex items-center justify-around">
									<FireIcon className="w-7 h-8 text-accent-500" />
									<span className="dm-sans-400 font-bold text-4xl text-neutral-50">
										{currentStreak}
									</span>
								</div>
								Current Streak
							</div>
							<div>
								<div className="flex items-center justify-around">
									<FireIcon className="w-7 h-8 text-accent-300" />
									<span className="dm-sans-400 font-bold text-4xl text-neutral-50">
										{longestStreak}
									</span>
								</div>
								Longest Streak
							</div>
						</div>
						<div className="bg-neutral-950 w-full h-1 rounded-2xl" />
						<div className="flex gap-4">
							{Object.entries(stats).map(([stat, value]) => (
								<div className="flex whitespace-nowrap gap-2">
									{stat}:{" "}
									<span className="font-light text-neutral-50">
										{value}
									</span>
									{/* TODO: hover to see score */}
								</div>
							))}
						</div>
					</div>
				</div>
				<DailyDistribution distribution={distribution} />
			</div>
		</div>
	);
};

type DailyDistributionProps = {
	distribution: ScoreDistribution;
};

const DailyDistribution = ({ distribution }: DailyDistributionProps) => {
	const maxLength = 250;

	const valueToPx = (arr: number[]) => {
		const maxVal = Math.max(...arr);
		return arr.map((val) => (val / maxVal) * maxLength);
	};

	const lengths = valueToPx(distribution);

	return (
		<div className="flex flex-col w-full h-full gap-6 bg-neutral-900 rounded-xl py-6 items-center justify-center">
			<span className="text-primary-300 dm-sans-400 text-[30px] font-bold">
				Guess Distribution
			</span>
			<div className="flex w-full justify-around px-9 lato-regular text-[18px] text-neutral-50">
				{lengths.map((length, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-end gap-2"
					>
						<div
							className="w-6 bg-accent-500 rounded-2xl"
							style={{ height: `${length}px` }}
						></div>
						{index === 6 ? "X" : index + 1}
					</div>
				))}
			</div>
		</div>
	);
};

type WinRateCircleProps = {
	winRate: number;
	size: number;
	fontColor: string;
	bgColor: string;
	lineColor: string;
};

const WinRateCircle = ({
	winRate,
	size,
	fontColor,
	bgColor,
	lineColor,
}: WinRateCircleProps) => {
	const STROKE_WIDTH = 8;
	const radius = (size - 2 * STROKE_WIDTH) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference * (1 - winRate / 100);

	return (
		<div className="relative inline-block">
			<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
				{/* bg circl */}
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					className={`${bgColor} stroke-current`}
					fill="currentColor"
				/>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					className={`${lineColor} stroke-current`}
					fill="none"
					strokeWidth={STROKE_WIDTH}
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					strokeLinecap="round"
					transform={`rotate(90 ${size / 2} ${size / 2})`}
				/>
			</svg>
			<div
				className={`${fontColor} dm-sans-400 font-bold text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
			>
				{winRate}%
			</div>
		</div>
	);
};

export default Statistics;
