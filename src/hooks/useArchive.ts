import { useNavigate } from "react-router-dom";
import { useArchiveResults } from "../services/api/game/archived-results";
import dateObjToString from "../utils/dateObjToString";

const useArchive = (
	year: number,
	month: number,
	setYear: React.Dispatch<React.SetStateAction<number>>,
	setMonth: React.Dispatch<React.SetStateAction<number>>,
) => {
	const navigate = useNavigate();

	// TODO: refetch when a game is finish to update UI
	const { data: archiveData, refetch: updateArchive } = useArchiveResults({
		year,
		month,
	});

	const handlePrevMonth = () => {
		setMonth((prev) => {
			if (prev === 1) {
				setYear((y) => y - 1);
				return 12;
			}
			return prev - 1;
		});
	};

	const handleNextMonth = () => {
		setMonth((prev) => {
			if (prev === 12) {
				setYear((y) => y + 1);
				return 1;
			}
			return prev + 1;
		});
	};

	const handleDay = (
		currDate: string,
		year: number,
		month: number,
		day: number,
	) => {
		const formattedDate = dateObjToString({
			currYear: year,
			currMonth: month,
			currDay: day,
		});
		if (currDate === formattedDate) {
			navigate("/daily");
			return;
		}
		navigate(`/archive/${formattedDate}`);
	};

	return {
		handlePrevMonth,
		handleNextMonth,
		handleDay,
		archiveData,
		updateArchive,
	};
};

export default useArchive;
