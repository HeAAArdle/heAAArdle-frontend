import { useParams } from "react-router-dom";
import useArchive from "../../hooks/useArchive";
import CloseIcon from "../../icons/CloseIcon";
import LeftArchiveIcon from "../../icons/LeftArchiveIcon";
import RightArchiveIcon from "../../icons/RightArchiveIcon";
import { useState } from "react";
import { monthToString } from "../../utils/monthToString";
import { isDayBeforeCurrDate } from "../../utils/isDayBeforeCurrDate";
import dateObjToString from "../../utils/dateObjToString";

const Archive = () => {
	const [year, setYear] = useState(new Date().getFullYear());
	const [month, setMonth] = useState(new Date().getMonth() + 1);
	const todayDay = new Date().getDate();
	const todayMonth = new Date().getMonth() + 1;
	const todayYear = new Date().getFullYear();

	const { date } = useParams();
	// TODO: selected Day
	// cant go next if not yet active?
	const currDay = date
		? date === `${todayYear}-${todayMonth}-${todayDay}`
			? date.split("-").map(Number)[2]
			: null
		: null;

	const {
		handlePrevMonth,
		handleNextMonth,
		handleDay,
		archiveData,
		updateArchive,
	} = useArchive(year, month, setYear, setMonth);

	if (!archiveData) return <p>Loading ...</p>;

	const otherMonthDay = (() => {
		if (archiveData.startingDay === 6) return 0;
		return archiveData.startingDay + 1;
	})();

	const totalDays = otherMonthDay + archiveData.numberOfDays;

	const daysleft = (() => {
		return 7 - (totalDays % 7) === 7 ? 0 : 7 - (totalDays % 7);
	})();

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
				<button
					onClick={handlePrevMonth}
					className="cursor-pointer bg-accent-800 rounded-full p-0.5"
				>
					<LeftArchiveIcon className="w-8 h-8" />
				</button>
				<div className="bg-accent-800 rounded-4xl w-fit px-4 py-1">
					{monthToString(month)} {year}
				</div>
				<button
					onClick={handleNextMonth}
					className="cursor-pointer bg-accent-800 rounded-full p-0.5"
				>
					<RightArchiveIcon className="w-8 h-8" />
				</button>
			</div>
			<div className="w-full h-1 rounded-3xl bg-neutral-800" />
			<div
				className={`grid grid-cols-7 grid-rows-${totalDays > 28 ? "5" : "4"} gap-x-4 gap-y-2`}
			>
				{Array.from({ length: otherMonthDay }, (_, index) => (
					<ArchiveDay
						key={index}
						// TODO: know no of days prev
						date={`${month === 1 ? year - 1 : year}-${month === 1 ? "12" : month - 1}-${archiveData.numberOfDaysOfPreviousMonth - (otherMonthDay - index - 1)}`}
						currentDate={{
							currYear: todayYear,
							currMonth: todayMonth,
							currDay: todayDay,
						}}
						isSelected={false}
						state="otherMonth"
						onClick={() => null}
					/>
				))}
				{archiveData.days.map((archiveDay) => {
					const [year, month, day] = archiveDay.date
						.split("-")
						.map(Number);
					const state = (() => {
						if (!archiveDay.available) return "unavailable";
						switch (archiveDay.result) {
							case null:
								return "unplayed";
							case true:
								return "won";
							default:
								return "lost";
						}
					})();
					return (
						<ArchiveDay
							key={`${month}-${day}`}
							date={archiveDay.date}
							currentDate={{
								currYear: todayYear,
								currMonth: todayMonth,
								currDay: todayDay,
							}}
							isSelected={currDay === day ? true : false}
							state={state}
							onClick={() =>
								handleDay(
									dateObjToString({
										currYear: todayYear,
										currMonth: todayMonth,
										currDay: todayDay,
									}),
									year,
									month,
									day,
								)
							}
						/>
					);
				})}
				{Array.from({ length: daysleft }, (_, index) => (
					<ArchiveDay
						key={index}
						date={`${month === 12 ? year + 1 : year}-${month === 12 ? "01" : month + 1}-${index + 1}`}
						currentDate={{
							currYear: todayYear,
							currMonth: todayMonth,
							currDay: todayDay,
						}}
						isSelected={false}
						state="otherMonth"
						onClick={() => null}
					/>
				))}
			</div>
		</div>
	);
};

type CalendarState = "lost" | "won" | "unplayed" | "otherMonth" | "unavailable";

type ArchiveDayProps = {
	date: string;
	currentDate: CurrentDayType;
	isSelected: boolean;
	state: CalendarState;
	onClick: () => void;
};

export type CurrentDayType = {
	currYear: number;
	currMonth: number;
	currDay: number;
};

const ArchiveDay = ({
	date,
	currentDate,
	isSelected,
	state,
	onClick,
}: ArchiveDayProps) => {
	const day = date.split("-").map(Number)[2];
	const textColor = (() => {
		if (state === "otherMonth") return "text-neutral-800";
		if (date === dateObjToString(currentDate)) return "text-accent-400";
		if (isDayBeforeCurrDate(dateObjToString(currentDate), date))
			return "text-neutral-50";
		return "text-neutral-500";
	})();

	return (
		<button
			onClick={onClick}
			className={`relative flex flex-col justify-center items-center w-16 h-16 dm-sans-400 font-bold text-4xl rounded-full ${isSelected ? "border-2 border-accent-500" : ""} 
			${textColor} ${
				date === dateObjToString(currentDate) ||
				isDayBeforeCurrDate(dateObjToString(currentDate), date)
					? "cursor-pointer"
					: ""
			}`}
		>
			{day}
			{state !== "unplayed" &&
				state !== "otherMonth" &&
				state !== "unavailable" && (
					<div
						className={`absolute bottom-1 w-2 h-2 rounded-full ${state === "won" ? "bg-success-500" : "bg-fail-500"}`}
					/>
				)}
		</button>
	);
};

export default Archive;
