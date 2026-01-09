import { useState } from "react";

type FilterType = "Daily" | "Weekly" | "Monthly" | "All-time";

type LeaderboardFilterProps = {
	currFilter: FilterType;
	onClick: (value: FilterType) => void;
};

const LeaderboardFilter = ({ currFilter, onClick }: LeaderboardFilterProps) => {
	const filters: FilterType[] = ["Daily", "Weekly", "Monthly", "All-time"];
	const activeIndex = filters.indexOf(currFilter);
	return (
		<div className="relative flex h-10 p-1 bg-gray-300 rounded-lg">
			<div
				className="absolute inset-1 flex transition-transform duration-300 ease-out w-32"
				style={{
					transform: `translateX(${activeIndex * 100}%)`,
				}}
			>
				<div className="flex-1 bg-white rounded-lg" />
			</div>
			{filters.map((filter) => (
				<button
					onClick={() => onClick(filter)}
					className="relative z-10 w-32 flex-1 rounded-lg text-sm font-medium"
					key={filter}
				>
					{filter}
				</button>
			))}
		</div>
	);
};

const Tester = () => {
	const [filter, setFilter] = useState<FilterType>("Daily");
	return <LeaderboardFilter currFilter={filter} onClick={setFilter} />;
};

export default Tester;
