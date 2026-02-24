export type FilterType = "Daily" | "Weekly" | "Monthly" | "All-time";

export type ModeType = "original" | "daily";

type LeaderboardFilterProps = {
    currentMode: ModeType;
    currentFilter: FilterType;
    onClick: (value: FilterType) => void;
};

const DEFAULT_FILTER_BY_MODE: Record<ModeType, FilterType> = {
    original: "Daily",
    daily: "Weekly",
};

const FILTERS_BY_MODE: Record<ModeType, FilterType[]> = {
    original: ["Daily", "Weekly", "Monthly", "All-time"],
    daily: ["Weekly", "Monthly", "All-time"],
};

const LeaderboardFilter = ({
    currentMode,
    currentFilter,
    onClick,
}: LeaderboardFilterProps) => {
    const filters = FILTERS_BY_MODE[currentMode];
    const defaultFilter = DEFAULT_FILTER_BY_MODE[currentMode];

    const activeFilter = filters.includes(currentFilter)
        ? currentFilter
        : defaultFilter;

    const activeIndex = Math.max(0, filters.indexOf(activeFilter));

    const indicatorWidth = 100 / filters.length;

    return (
        <div className="relative flex h-16 w-lg p-1.5 bg-neutral-900 rounded-xl">
            {/* Active Indicator */}
            <div
                className="absolute inset-1 flex transition-transform duration-300 ease-out"
                style={{
                    width: `${indicatorWidth}%`,
                    transform: `translateX(${activeIndex * 100}%)`,
                }}
            >
                <div className="w-full rounded-lg bg-primary-500" />
            </div>

            {filters.map((filter) => {
                const isActive = currentFilter === filter;

                return (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => onClick(filter)}
                        className={`relative flex-1 ${isActive ? "body-l-b text-neutral-950" : "body-l-r text-neutral-600"} transition-standard z-10`}
                    >
                        {filter}
                    </button>
                );
            })}
        </div>
    );
};

export default LeaderboardFilter;
