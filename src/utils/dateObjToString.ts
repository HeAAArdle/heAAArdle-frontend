import type { CurrentDayType } from "../components/modals/Archive";

const dateObjToString = ({ currYear, currMonth, currDay }: CurrentDayType) => {
	const formattedMonth = currMonth < 10 ? `0${currMonth}` : currMonth;
	const formattedDay = currDay < 10 ? `0${currDay}` : currDay;
	return `${currYear}-${formattedMonth}-${formattedDay}`;
};

export default dateObjToString;
