import AppIcon from "../../icons/AppIcon";
import DailyIcon from "../../icons/DailyIcon";
import HelpIcon from "../../icons/HelpIcon";
import LyricsIcon from "../../icons/LyricsIcon";
import OriginalIcon from "../../icons/OriginalIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import TimedIcon from "../../icons/TimedIcon";

const NavigationBar = () => {
	return (
		<div className="h-full fixed top-0 left-0 w-28 flex flex-col justify-between items-center py-8 bg-accent-300">
			<div className="flex flex-col gap-4">
				<AppIcon className="w-16 h-16" />
				<HelpIcon className="w-16 h-16" />
			</div>
			<div className="flex flex-col gap-4">
				<OriginalIcon className="w-16 h-16" />
				<DailyIcon className="w-16 h-16" />
				<LyricsIcon className="w-16 h-16" />
				<TimedIcon className="w-16 h-16" />
			</div>
			<SettingsIcon className="w-16 h-16" />
		</div>
	);
};

export default NavigationBar;
