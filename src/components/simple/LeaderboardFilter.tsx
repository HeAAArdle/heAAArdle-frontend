import { useState } from "react";

type FilterType = "Daily" | "Weekly" | "Monthly" | "All-time";

type LeaderboardFilterProps = {
	currFilter: FilterType;
	onClick: (value: FilterType) => void;
};

const LeaderboardFilter = ({ currFilter, onClick }: LeaderboardFilterProps) => {
	const filters: FilterType[] = ["Daily", "Weekly", "Monthly", "All-time"];
	return (
		<div className="flex gap-2 h-10 items-center p-1 bg-gray-300 rounded-lg">
			{filters.map((filter, index) => (
				<span
					onClick={() => onClick(filter)}
					className={`${currFilter === filter ? "bg-gray-50" : ""} flex h-full items-center rounded-lg px-6 cursor-pointer transition`}
					key={index}
				>
					{filter}
				</span>
			))}
		</div>
	);
};

const Tester = () => {
	const [filter, setFilter] = useState<FilterType>("Daily");
	return <LeaderboardFilter currFilter={filter} onClick={setFilter} />;
};

export default Tester;
