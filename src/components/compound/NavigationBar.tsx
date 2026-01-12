import { Link } from "react-router-dom";
import AppIcon from "../../icons/AppIcon";
import DailyIcon from "../../icons/DailyIcon";
import HelpIcon from "../../icons/HelpIcon";
import LyricsIcon from "../../icons/LyricsIcon";
import OriginalIcon from "../../icons/OriginalIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import TimedIcon from "../../icons/TimedIcon";
import IconCircle from "../simple/IconCircle";

const NavigationBar = () => {
	return (
		<div className="h-23/24 fixed top-0 left-0 w-26 ml-4 my-4 z-10 rounded-2xl border border-neutral-900 flex flex-col justify-between items-center py-8 bg-neutral-950/60">
			<div className="flex flex-col gap-4">
				<Link to="/">
					<AppIcon className="w-16 h-16" />
				</Link>
				{/* TODO: no help yet */}
				<Link to="/">
					<IconCircle>
						<HelpIcon />
					</IconCircle>
				</Link>
			</div>
			<div className="flex flex-col gap-4">
				<Link to="/">
					<IconCircle>
						<OriginalIcon />
					</IconCircle>
				</Link>
				<Link to="/daily">
					<IconCircle>
						<DailyIcon />
					</IconCircle>
				</Link>
				<Link to="/lyrics">
					<IconCircle>
						<LyricsIcon />
					</IconCircle>
				</Link>
				<Link to="/rapid">
					<IconCircle>
						<TimedIcon />
					</IconCircle>
				</Link>
			</div>
			{/* TODO: no settings yet */}
			<Link to="/">
				<IconCircle>
					<SettingsIcon />
				</IconCircle>
			</Link>
		</div>
	);
};

export default NavigationBar;
