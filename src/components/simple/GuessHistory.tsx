type GuessResult = "correct" | "incorrect" | "unanswered";

type GuessHistoryProps = {
	result: GuessResult;
	text?: string;
};

const GuessHistory = ({ result, text }: GuessHistoryProps) => {
	const [borderColor, fontColor, bgColor] = (() => {
		switch (result) {
			case "correct":
				return [
					"border-success-700",
					"text-success-300",
					"bg-success-700",
				];
			case "incorrect":
				return ["border-fail-700", "text-fail-300", "bg-fail-700"];
			default:
				return ["border-neutral-700", "text-black", "bg-neutral-900"];
		}
	})();

	return (
		<div
			className={`flex items-center p-1 pl-3 rounded-lg h-12 w-full ${bgColor} border-2 lato-regular text-lg ${fontColor} ${borderColor}`}
		>
			{text}
		</div>
	);
};

export default GuessHistory;
