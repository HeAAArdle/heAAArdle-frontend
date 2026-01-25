import { useEffect, useState, type JSX } from "react";
import NavigationBar from "../compound/NavigationBar";
import Support from "../modals/Support";
import { useLocation } from "react-router-dom";
import TopButtons from "../compound/TopButtons";
import Leaderboard from "../compound/Leaderboard";
import Archive from "../simple/Archive";
import Statistics from "../modals/Statistics";
import { useAuthState } from "../../hooks/server-data/useAuthState";

type PageLayoutProps = {
	children: JSX.Element;
};

const PageLayout = ({ children }: PageLayoutProps) => {
	const location = useLocation();
	const path = location.pathname;
	const { data: authData } = useAuthState();

	// OtherNavBar states
	const isArchiveIconShowing = path === "/daily" || path.includes("archive");
	const isLeaderboardIconShowing = path === "/" || path === "/daily";
	const isStatsIconShowing =
		isLeaderboardIconShowing && authData ? authData.isAuthenticated : false;

	// modal display state
	const [isSupportOpen, setIsSupportOpen] = useState(false);
	const [isLeaderboardsOpen, setIsLeaderboardsOpen] = useState(false);
	const [isStatsOpen, setIsStatsOpen] = useState(false);
	const [isArchiveOpen, setIsArchiveOpen] = useState(false);

	// TODO: check if need pa
	// closes all modal if path or auth changes
	useEffect(() => {
		setIsSupportOpen(false);
		setIsLeaderboardsOpen(false);
		setIsStatsOpen(false);
		setIsArchiveOpen(false);
	}, [path, authData]);

	return (
		<div className="relative w-full h-full">
			{/* Navbar */}
			{path !== "/signin" && path !== "/signup" && <NavigationBar />}

			{/* Main */}
			<div className="h-full w-full">{children}</div>

			{/* Dev Support */}
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

			{(isLeaderboardsOpen || isStatsOpen || isArchiveOpen) && (
				<div className="absolute flex inset-0 justify-center items-center">
					{isLeaderboardsOpen && (
						<Leaderboard
							onClick={() => setIsLeaderboardsOpen(false)}
						/>
					)}
					{isStatsOpen && (
						<Statistics
							onClose={() => setIsStatsOpen(false)}
							path={path}
						/>
					)}
					{isArchiveOpen && <Archive onClose={() => setIsArchiveOpen(false)} />}
				</div>
			)}
			<div className="absolute top-0 right-0 z-0">
				<TopButtons
					isArchiveIconShowing={isArchiveIconShowing}
					isLeaderboardIconShowing={isLeaderboardIconShowing}
					isStatsIconShowing={isStatsIconShowing}
					setIsLeaderboardsOpen={setIsLeaderboardsOpen}
					setIsStatsOpen={setIsStatsOpen}
					setIsArchiveOpen={setIsArchiveOpen}
				/>
			</div>
		</div>
	);
};

export default PageLayout;
