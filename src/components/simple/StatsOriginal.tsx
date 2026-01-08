import Fire from "~icons/icon-park-outline/fire";

type StatsOriginalProps = {
	currentStreak: number;
	longestStreak: number;
	gamesPlayed: number;
	winCount: number;
	winRate: number;
};

const StatsOriginal = ({
	currentStreak,
	longestStreak,
	gamesPlayed,
	winCount,
	winRate,
}: StatsOriginalProps) => {
	return (
		<div className="border-2 bg-white rounded-2xl p-4 w-96 flex flex-col items-center gap-2 text-lg">
			<span className="dm-sans-400 text-4xl">Stats</span>
			<div className="flex justify-around w-full">
				<div className="flex flex-col items-center">
					<div className="flex items-center">
						<Fire className="text-primary-400" />
						{currentStreak}
					</div>
					Current Streak
				</div>
				<div className="flex flex-col items-center">
					<div className="flex items-center">
						<Fire />
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

export default StatsOriginal;
