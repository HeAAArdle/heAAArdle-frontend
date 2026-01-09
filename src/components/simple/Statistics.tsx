import Fire from "../../icons/FireIcon";

type StatType = "original" | "daily";

type ScoreDistribution = [
	number,
	number,
	number,
	number,
	number,
	number,
	number,
];

type StatisticsProps = {
	currentStreak: number;
	longestStreak: number;
	gamesPlayed: number;
	winCount: number;
	winRate: number;
	type: StatType;
	distribution?: ScoreDistribution;
};

const Statistics = ({
	currentStreak,
	longestStreak,
	gamesPlayed,
	winCount,
	winRate,
	type,
	distribution,
}: StatisticsProps) => {
	return (
		<div className="border-2 bg-white rounded-2xl p-4 w-96 flex flex-col items-center gap-2 text-lg">
			<span className="dm-sans-400 text-4xl">Stats</span>
			{type === "daily" && distribution && (
				<DailyDistribution distribution={distribution} />
			)}
			<div className="flex justify-around w-full">
				<div className="flex flex-col items-center">
					<div className="flex items-center gap-1">
						<Fire className="text-primary-400 w-8 h-8" />
						{currentStreak}
					</div>
					Current Streak
				</div>
				<div className="flex flex-col items-center">
					<div className="flex items-center gap-1">
						<Fire className="text-neutral-300 w-8 h-8" />
						{longestStreak}
					</div>
					Longest Streak
				</div>
			</div>
			<div className="flex justify-around w-full">
				<div className="flex flex-col items-center">
					<span>{gamesPlayed}</span>Played
				</div>
				<div className="flex flex-col items-center">
					<span>{winCount}</span>Win Count
				</div>
				<div className="flex flex-col items-center">
					<span>{`${winRate}%`}</span>Win Rate
				</div>
			</div>
		</div>
	);
};

type DailyDistributionProps = {
	distribution: ScoreDistribution;
};

const DailyDistribution = ({ distribution }: DailyDistributionProps) => {
	const maxLength = 176;

	const valueToPx = (arr: number[]) => {
		const maxVal = Math.max(...arr);
		return arr.map((val) => (val / maxVal) * maxLength);
	};

	const lengths = valueToPx(distribution);

	return (
		<div className="flex w-full justify-around">
			{lengths.map((length, index) => (
				<div
					key={index}
					className="flex flex-col items-center justify-end gap-2"
				>
					<div
						className="w-5 bg-red-900 rounded-2xl"
						style={{ height: `${length}px` }}
					></div>
					{index === 6 ? "X" : index + 1}
				</div>
			))}
		</div>
	);
};

export default Statistics;
