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
		<div className="h-23/24 fixed top-0 left-0 w-26 ml-4 my-4 rounded-2xl border border-neutral-900 flex flex-col justify-between items-center py-8 bg-neutral-950/60">
			<div className="flex flex-col gap-4">
				<AppIcon className="w-16 h-16" />
				<IconCircle>
					<HelpIcon />
				</IconCircle>
			</div>
			<div className="flex flex-col gap-4">
				<IconCircle>
					<OriginalIcon />
				</IconCircle>
				<IconCircle>
					<DailyIcon />
				</IconCircle>
				<IconCircle>
					<LyricsIcon />
				</IconCircle>
				<IconCircle>
					<TimedIcon />
				</IconCircle>
			</div>
			<IconCircle>
				<SettingsIcon />
			</IconCircle>
		</div>
	);
};

export default NavigationBar;
