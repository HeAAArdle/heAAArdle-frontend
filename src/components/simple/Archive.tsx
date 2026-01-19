import CloseIcon from "../../icons/CloseIcon";
import LeftArchiveIcon from "../../icons/LeftArchiveIcon";
import RightArchiveIcon from "../../icons/RightArchiveIcon";

const Archive = () => {
	const cal = Array.from({ length: 35 }).map((_, index) => {
		return {
			day: index - 1,
			isSelected: false,
			state: "unplayed",
		};
	});

	cal[0].day = 30;
	cal[1].day = 31;
	cal[0].state = "otherMonth";
	cal[1].state = "otherMonth";
	cal[33].day = 1;
	cal[34].day = 2;
	cal[33].state = "otherMonth";
	cal[34].state = "otherMonth";
	cal[2].state = "won";
	cal[3].state = "won";
	cal[6].state = "won";
	cal[8].state = "won";
	cal[4].state = "lost";
	cal[5].state = "lost";
	cal[7].state = "lost";
	cal[16].isSelected = true;

	return (
		<div className="relative flex flex-col items-center justify-center bg-neutral-950 text-neutral-50 lato-regular text-[18px] rounded-3xl w-max p-12 gap-6">
			<button className="absolute top-6 right-6">
				<CloseIcon className="text-neutral-50 w-8 h-8" />
			</button>
			<div className="flex flex-col gap-2 items-center justify-center">
				<span className="text-primary-500 dm-sans-400 font-bold text-5xl">
					Archive
				</span>
				Play past Daily songs.
			</div>
			<div className="flex items-center justify-between w-full font-bold text-neutral-50">
				<div className="cursor-pointer bg-accent-800 rounded-full p-0.5">
					<LeftArchiveIcon className="w-8 h-8" />
				</div>
				<div className="bg-accent-800 rounded-4xl w-fit px-4 py-1">
					January 2026
				</div>
				<div className="cursor-pointer bg-accent-800 rounded-full p-0.5">
					<RightArchiveIcon className="w-8 h-8" />
				</div>
			</div>
			<div className="w-full h-1 rounded-3xl bg-neutral-800" />
			<div className="grid grid-cols-7 grid-rows-5 gap-x-4 gap-y-2">
				{cal.map((date, index) => (
					<ArchiveDay
						key={index}
						day={date.day}
						currentDay={16}
						isSelected={date.isSelected}
						state={date.state}
					/>
				))}
			</div>
		</div>
	);
};

type CalendarState = "lost" | "won" | "unplayed" | "otherMonth";

type ArchiveDayProps = {
	day: number;
	currentDay: number;
	isSelected: boolean;
	state: CalendarState;
};

const ArchiveDay = ({
	day,
	currentDay,
	isSelected,
	state,
}: ArchiveDayProps) => {
	const textColor = (() => {
		if (state === "otherMonth") return "text-neutral-800";
		if (day === currentDay) return "text-accent-400";
		if (day < currentDay) return "text-neutral-50";
		return "text-neutral-500";
	})();

	return (
		<button
			className={`relative flex flex-col justify-center items-center w-16 h-16 dm-sans-400 font-bold text-4xl rounded-full ${isSelected ? "border-2 border-accent-500" : ""} ${textColor} ${state === "otherMonth" || day > currentDay ? "" : "cursor-pointer"}`}
		>
			{day}
			{state !== "unplayed" && state !== "otherMonth" && (
				<div
					className={`absolute bottom-1 w-2 h-2 rounded-full ${state === "won" ? "bg-success-500" : "bg-fail-500"}`}
				/>
			)}
		</button>
	);
};

export default Archive;
