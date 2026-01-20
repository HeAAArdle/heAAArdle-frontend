import { Link, useLocation } from "react-router-dom";
import AppIcon from "../../icons/AppIcon";
import DailyIcon from "../../icons/DailyIcon";
import HelpIcon from "../../icons/HelpIcon";
import LyricsIcon from "../../icons/LyricsIcon";
import OriginalIcon from "../../icons/OriginalIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import TimedIcon from "../../icons/TimedIcon";
import IconCircle from "../simple/IconCircle";
import { useSignOut } from "../../services/api/account/sign-out";

const NavigationBar = () => {
	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;

	const { mutate: signout } = useSignOut();

	return (
		<div className="h-23/24 fixed top-0 left-0 w-26 ml-4 my-4 z-10 rounded-2xl border border-neutral-900 flex flex-col justify-between items-center py-8 bg-neutral-950/60">
			<div className="flex flex-col gap-4">
				<Link to="/">
					<AppIcon className="w-16 h-16" />
				</Link>
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
				<Link to="/daily">
					<IconCircle isSelected={isActive("/daily")}>
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
			<Link to="/">
				{/* TODO: once settings popup is done */}
				<IconCircle isSelected={false} onClick={signout}>
					<SettingsIcon />
				</IconCircle>
			</Link>
		</div>
	);
};

export default NavigationBar;
