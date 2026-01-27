import { useState } from "react";
import LeaderboardFilter, {
	type FilterType,
	type ModeType,
} from "../simple/LeaderboardFilter";
import DailyIcon from "../../icons/DailyIcon";
import OriginalIcon from "../../icons/OriginalIcon";
import IconCircle from "../simple/IconCircle";
import CloseIcon from "../../icons/CloseIcon";
import StarIcon from "../../icons/StarIcon";
import { useLeaderboardData, type LeaderboardBaseType } from "../../services/api/game/leaderboard";
import { useAuthState } from "../../hooks/server-data/useAuthState";

type LeaderboardProps = {
	onClick: () => void;
};

const Leaderboard = ({
	onClick,
}: LeaderboardProps) => {
	const {data: leaderboardData} = useLeaderboardData();
	const {data: authData} = useAuthState();
	
	const [filter, setFilter] = useState<FilterType>("Daily");
	const [mode, setMode] = useState<ModeType>("original");

	if (!leaderboardData) return <p>Loading...</p>;
	
	const filterState = filter.toLowerCase();
	const lb = leaderboardData[mode][filterState as keyof LeaderboardBaseType];
	const userIndex = lb.slice(0, lb.length - 2).findIndex(item => item.isUser);
	

	return (
		<div className="relative flex flex-col items-center justify-center gap-6 bg-neutral-950 rounded-3xl p-12">
			<button className="absolute top-6 right-6" onClick={onClick}>
				<CloseIcon className="text-neutral-50 w-8 h-8" />
			</button>
			<div className="flex gap-4">
				<IconCircle
					isSelected={mode === "original" ? true : false}
					onClick={() => {
						setFilter("Weekly");
						setMode("original");
					}}
				>
					<OriginalIcon />
				</IconCircle>
				<IconCircle
					isSelected={mode === "daily" ? true : false}
					onClick={() => {
						setFilter("Weekly");
						setMode("daily");
					}}
				>
					<DailyIcon />
				</IconCircle>
			</div>
			<span className="text-primary-500 font-bold text-5xl">
				Leaderboard
			</span>
			<LeaderboardFilter
				currMode={mode}
				currFilter={filter}
				onClick={setFilter}
			/>
			<div className="flex flex-col w-full gap-2">
				{lb.map((bar, index) => (
					<LeaderboardSpot
						key={index}
						rank={index + 1}
						name={bar.username}
						score={bar.numberOfWins}
						isUser={userIndex === index}
					/>
				))}
				<div className="bg-neutral-800 w-full h-1 rounded-2xl my-4" />
				{
					authData?.isAuthenticated && userIndex > 4 && (
				<div>
					<LeaderboardSpot rank={userIndex + 1} name={lb[userIndex].username} score={lb[userIndex].numberOfWins} isUser={true} />
				</div>
					)
				}
			</div>
		</div>
	);
};

type LeaderboardSpotProps = {
	rank: number;
	name: string;
	score: number;
	isUser: boolean
};

const LeaderboardSpot = ({ rank, name, score, isUser }: LeaderboardSpotProps) => {
	const bgColor = (()=> {
		if (isUser && rank < 5) return "bg-primary-700";
		if (isUser) return "bg-neutral-700";
		return "bg-neutral-900"
	})()
	return (
		<div className={`flex items-center justify-between w-full rounded-xl ${bgColor} px-6 py-3 text-primary-300 lato-bold text-xl`}>
			<div className="flex items-center justify-center gap-3">
				<LeaderboardIdentifier rank={rank} />
				<span className="text-neutral-50 text-xl lato-bold">
					{nameReducer(name)}
				</span>
			</div>
			{score}
		</div>
	);
};

const LeaderboardIdentifier = ({ rank }: { rank: number }) => {
	const bgColor = (() => {
		switch (rank) {
			case 1:
				return "text-[#F3C26B]";
			case 2:
				return "text-[#B8C0CC]";
			case 3:
				return "text-[#D1A377]";
			case 4:
			case 5:
				return "text-accent-300";
			default:
				return "text-neutral-300";
		}
	})();

	return (
		<div className="relative w-12 h-12">
			<StarIcon className={`${bgColor} w-12 h-12`} />
			<span className="absolute pt-1 pr-0.5 inset-0 flex items-center justify-center text-accent-700 dm-sans-400 font-bold text-2xl">
				{rank}
			</span>
		</div>
	);
};

const nameReducer = (name: string) =>
	name.length >= 30 ? name.slice(0, 28) + "..." : name;

export default Leaderboard;
