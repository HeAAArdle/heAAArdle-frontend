import IconCircle from "../simple/IconCircle";
import LeaderboardIcon from "../../icons/LeaderboardIcon";
import StatsIcon from "../../icons/StatsIcon";
import ArchiveIcon from "../../icons/ArchiveIcon";

const OtherNavigationBar = () => {
    const circleActiveColor = "bg-primary-500/30";
    const circleInactiveColor = "border-primary-300/60";
    const circleInactiveHoverColor = "hover:border-primary-500/60";
    const iconActiveColor = "text-primary-200";
    const iconInactiveColor = "text-primary-300";
    const iconInactiveHoverColor = "group-hover:text-primary-500";

    return (
        <div className="mt-12 mr-12">
            <div className="flex flex-row gap-8 justify-center items-center">
                <IconCircle isSelected={false} circleActiveColor={circleActiveColor} circleInactiveColor={circleInactiveColor} circleInactiveHoverColor={circleInactiveHoverColor} iconActiveColor={iconActiveColor} iconInactiveColor={iconInactiveColor} iconInactiveHoverColor={iconInactiveHoverColor}>
                    <ArchiveIcon />
                </IconCircle>
                <IconCircle isSelected={false} circleActiveColor={circleActiveColor} circleInactiveColor={circleInactiveColor} circleInactiveHoverColor={circleInactiveHoverColor} iconActiveColor={iconActiveColor} iconInactiveColor={iconInactiveColor} iconInactiveHoverColor={iconInactiveHoverColor}>
                    <LeaderboardIcon />
                </IconCircle>
                <IconCircle isSelected={false} circleActiveColor={circleActiveColor} circleInactiveColor={circleInactiveColor} circleInactiveHoverColor={circleInactiveHoverColor} iconActiveColor={iconActiveColor} iconInactiveColor={iconInactiveColor} iconInactiveHoverColor={iconInactiveHoverColor}>
                    <StatsIcon />
                </IconCircle>
            </div>
        </div>
    );
};

export default OtherNavigationBar;
