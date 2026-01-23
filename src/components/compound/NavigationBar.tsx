import { Link, useLocation, useNavigate } from "react-router-dom";
import DailyIcon from "../../icons/DailyIcon";
import HelpIcon from "../../icons/HelpIcon";
import LyricsIcon from "../../icons/LyricsIcon";
import OriginalIcon from "../../icons/OriginalIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import TimedIcon from "../../icons/TimedIcon";
import IconCircle from "../simple/IconCircle";
import { useSignOut } from "../../services/api/account/sign-out";
import { useAuthState } from "../../hooks/server-data/useAuthState";
import LoginIcon from "../../icons/LoginIcon";
import { useState } from "react";
import Settings from "../modals/Settings";
import { useDeleteUser } from "../../services/api/account/delete-account";
import DeleteAccount from "../modals/DeleteAccount";

const NavigationBar = () => {
	const [isSettingsSelected, setIsSettingsSelected] = useState(false);
	const [isDeleteSelected, setIsDeleteSelected] = useState(false);

	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;
	const navigate = useNavigate();

	const { data: authData } = useAuthState();
	const { mutate: signout } = useSignOut();
	const { mutate: deleteAcct } = useDeleteUser();

	const handleSettingsClick = () => {
		if (authData?.isAuthenticated) {
			setIsSettingsSelected((prev) => !prev);
		} else {
			navigate("/signin");
		}
	};

	return (
		<div className="h-23/24 fixed top-0 left-0 w-26 ml-4 my-4 z-10 rounded-2xl border border-neutral-900 flex flex-col justify-between items-center py-8 bg-neutral-950/60 shadow-xl shadow-primary-400/30">
			<div className="flex flex-col gap-4">
				{/* TODO: no help yet */}
				<Link to="/">
					{/*edit when help popup is done*/}
					<IconCircle isSelected={false}>
						<HelpIcon />
					</IconCircle>
				</Link>
			</div>
			<div className="flex flex-col gap-4">
				<Link to="/">
					<IconCircle isSelected={isActive("/")}>
						<OriginalIcon />
					</IconCircle>
				</Link>
				<Link to="/2026-01-23">
					<IconCircle isSelected={isActive("/2026-01-23")}>
						<DailyIcon />
					</IconCircle>
				</Link>
				<Link to="/lyrics">
					<IconCircle isSelected={isActive("/lyrics")}>
						<LyricsIcon />
					</IconCircle>
				</Link>
				<Link to="/rapid">
					<IconCircle isSelected={isActive("/timed")}>
						<TimedIcon />
					</IconCircle>
				</Link>
			</div>
			{/* TODO: no settings yet */}
			<div className="relative">
				<IconCircle
					isSelected={isDeleteSelected || isSettingsSelected}
					onClick={handleSettingsClick}
				>
					{authData?.isAuthenticated ? (
						<SettingsIcon />
					) : (
						<LoginIcon />
					)}
				</IconCircle>
				{authData?.isAuthenticated && isSettingsSelected && (
					<Settings
						deleteAcct={setIsDeleteSelected}
						signout={signout}
						isOpen={setIsSettingsSelected}
					/>
				)}
				{authData?.isAuthenticated && isDeleteSelected && (
					<DeleteAccount
						isOpen={setIsDeleteSelected}
						deleteAcct={deleteAcct}
					/>
				)}
			</div>
		</div>
	);
};

export default NavigationBar;
