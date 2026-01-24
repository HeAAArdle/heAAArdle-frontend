export const isDayBeforeCurrDate = (currDate: string, date: string) => {
	const curr = new Date(currDate);
	const d = new Date(date);

	curr.setHours(0, 0, 0, 0);
	d.setHours(0, 0, 0, 0);

	return d < curr;
};
