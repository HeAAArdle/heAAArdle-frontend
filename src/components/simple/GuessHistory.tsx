type GuessResult = "correct" | "incorrect" | "unanswered";

type GuessHistoryProps = {
	result: GuessResult;
	text: string;
};

const GuessHistory = ({ result, text }: GuessHistoryProps) => {
	const bgColor = (() => {
		switch (result) {
			case "correct":
				return "bg-green-400";
			case "incorrect":
				return "bg-red-400";
			default:
				return "bg-gray-400";
		}
	})();

	return (
		<div
			className={`flex items-center border-2 p-4 rounded-[10px] h-16 w-96 ${bgColor} lato-regular`}
		>
			{text}
		</div>
	);
};

export default GuessHistory;
