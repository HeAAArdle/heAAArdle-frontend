import IconCircle from "../simple/IconCircle";
import LeaderboardIcon from "../../icons/LeaderboardIcon";
import StatsIcon from "../../icons/StatsIcon";
import ArchiveIcon from "../../icons/ArchiveIcon";
import { useState } from "react";

type TopButtonsProps = {
	isLeaderboardIconShowing: boolean;
	isStatsIconShowing: boolean;
	isArchiveIconShowing: boolean;
	setIsLeaderboardsOpen: (value: boolean) => void;
	setIsStatsOpen: (value: boolean) => void;
	setIsArchiveOpen: (value: boolean) => void;
};

type ActiveButtonsType = "archive" | "leaderboard" | "stats" | null;

function TopButtons({
	isLeaderboardIconShowing,
	isStatsIconShowing,
	isArchiveIconShowing,
	setIsLeaderboardsOpen,
	setIsStatsOpen,
	setIsArchiveOpen,
}: TopButtonsProps) {
	// Archive		- show only when at daily / archive mode
	// Leaderboard	- show only when at original / daily
	// Stats		- show only when at original / daily and authenticated

	const [activeButton, setActiveButton] = useState<ActiveButtonsType>(null);

	const circleActiveColor = "bg-primary-500/30";
	const circleInactiveColor = "border-primary-300/60";
	const circleInactiveHoverColor = "hover:border-primary-500/60";

	const iconActiveColor = "text-primary-200";
	const iconInactiveColor = "text-primary-300";
	const iconInactiveHoverColor = "group-hover:text-primary-500";

	const setArchive = () => {
		setIsArchiveOpen(true);
		setActiveButton("archive");

		setIsLeaderboardsOpen(false);
		setIsStatsOpen(false);
	};

	const setLeaderboards = () => {
		setIsLeaderboardsOpen(true);
		setActiveButton("leaderboard");

		setIsArchiveOpen(false);
		setIsStatsOpen(false);
	};
	const setStats = () => {
		setIsStatsOpen(true);
		setActiveButton("stats");

		setIsLeaderboardsOpen(false);
		setIsArchiveOpen(false);
	};
	return (
		<div className="mt-12 mr-12">
			<div className="flex flex-row gap-8 justify-center items-center">
				{isArchiveIconShowing && (
					<IconCircle
						isSelected={activeButton === "archive"}
						onClick={() => setArchive()}
						circleActiveColor={circleActiveColor}
						circleInactiveColor={circleInactiveColor}
						circleInactiveHoverColor={circleInactiveHoverColor}
						iconActiveColor={iconActiveColor}
						iconInactiveColor={iconInactiveColor}
						iconInactiveHoverColor={iconInactiveHoverColor}
					>
						<ArchiveIcon />
					</IconCircle>
				)}
				{isLeaderboardIconShowing && (
					<IconCircle
						isSelected={activeButton === "leaderboard"}
						onClick={() => setLeaderboards()}
						circleActiveColor={circleActiveColor}
						circleInactiveColor={circleInactiveColor}
						circleInactiveHoverColor={circleInactiveHoverColor}
						iconActiveColor={iconActiveColor}
						iconInactiveColor={iconInactiveColor}
						iconInactiveHoverColor={iconInactiveHoverColor}
					>
						<LeaderboardIcon />
					</IconCircle>
				)}
				{isStatsIconShowing && (
					<IconCircle
						isSelected={activeButton === "stats"}
						onClick={() => setStats()}
						circleActiveColor={circleActiveColor}
						circleInactiveColor={circleInactiveColor}
						circleInactiveHoverColor={circleInactiveHoverColor}
						iconActiveColor={iconActiveColor}
						iconInactiveColor={iconInactiveColor}
						iconInactiveHoverColor={iconInactiveHoverColor}
					>
						<StatsIcon />
					</IconCircle>
				)}
			</div>
		</div>
	);
}

export default TopButtons;
