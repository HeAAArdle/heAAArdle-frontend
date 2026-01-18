export type FilterType = "Daily" | "Weekly" | "Monthly" | "All-time";

export type ModeType = "original" | "daily";

type LeaderboardFilterProps = {
	currMode: ModeType;
	currFilter: FilterType;
	onClick: (value: FilterType) => void;
};

const LeaderboardFilter = ({
	currMode,
	currFilter,
	onClick,
}: LeaderboardFilterProps) => {
	const filters: FilterType[] =
		currMode === "original"
			? ["Daily", "Weekly", "Monthly", "All-time"]
			: ["Weekly", "Monthly", "All-time"];
	const totalSlots = filters.length;
	const activeIndex = filters.indexOf(currFilter);
	return (
		<div className="relative flex h-16 p-1 bg-neutral-900 rounded-lg w-lg">
			<div
				style={{
					width: `${98.5 / totalSlots}%`,
					transform: `translateX(${activeIndex * 100}%)`,
				}}
				className="absolute inset-1 flex transition-transform duration-300 ease-out"
			>
				<div className="w-full bg-primary-500 rounded-lg" />
			</div>
			{Array.from({ length: totalSlots }).map((_, i) => {
				const filter = filters[i];

				return (
					<button
						key={i}
						disabled={!filter}
						onClick={() => filter && onClick(filter)}
						className={`relative z-10 flex-1 text-2xl lato-regular font-bold rounded-lg
							${
								filter
									? currFilter === filter
										? "text-neutral-950"
										: "text-neutral-600"
									: "cursor-default"
							}`}
					>
						{filter ?? ""}
					</button>
				);
			})}
		</div>
	);
};

export default LeaderboardFilter;
