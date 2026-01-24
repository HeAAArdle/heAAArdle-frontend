import { useState, type JSX } from "react";
import NavigationBar from "../compound/NavigationBar";
import Support from "../modals/Support";
import { useLocation } from "react-router-dom";
import TopButtons from "../compound/TopButtons";
import Leaderboard from "../compound/Leaderboard";
import Archive from "../simple/Archive";
import Statistics from "../modals/Statistics";

type PageLayoutProps = {
	children: JSX.Element;
};

const PageLayout = ({ children }: PageLayoutProps) => {
	const [isSupportOpen, setIsSupportOpen] = useState(false);
    const [isLeaderboardsOpen, setIsLeaderboardsOpen] = useState(false);
    const [isStatsOpen, setIsStatsOpen] = useState(false);
    const [isArchiveOpen, setIsArchiveOpen] = useState(false);

	const location = useLocation();
	const path = location.pathname;
	return (
		<div className="relative w-full h-full">
			{path !== "/signin" && path !== "/signup" && <NavigationBar />}
			<div className="h-full w-full">{children}</div>
			<div className="absolute bottom-4 right-4 lato-regular text-neutral-50 text-[18px]">
				Support the{" "}
				<span
					onClick={() => setIsSupportOpen(true)}
					className="lato-bold text-accent-500 cursor-pointer z-1 border-b-2 border-accent-500"
				>
					Developers
				</span>
			</div>
			{isSupportOpen && (
				<Support onClick={() => setIsSupportOpen(false)} />
			)}
			<div className="absolute flex inset-0 justify-center items-center">
				{isLeaderboardsOpen && (
					<Leaderboard onClick={() => setIsLeaderboardsOpen(false)} />
				)}
				{isStatsOpen && (
					<Statistics longestStreak={69} currentStreak={69} gamesPlayed={69} winCount={69} winRate={69} type="original" distribution={[1, 2, 3, 4, 5, 6]} onClick={() => setIsStatsOpen(false)} />
				)}
				{isArchiveOpen && (
					<Archive />
				)}
			</div>
			<div className="absolute top-0 right-0">
				<TopButtons setIsLeaderboardsOpen={setIsLeaderboardsOpen} setIsStatsOpen={setIsStatsOpen} setIsArchiveOpen={setIsArchiveOpen} />
			</div>
		</div>
	);
};

export default PageLayout;
