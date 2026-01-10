type GuessResult = "correct" | "incorrect" | "unanswered";

type GuessHistoryProps = {
	result: GuessResult;
	text?: string;
};

const GuessHistory = ({ result, text }: GuessHistoryProps) => {
	const [borderColor, fontColor] = (() => {
		switch (result) {
			case "correct":
				return ["border-success-700", "text-success-500"];
			case "incorrect":
				return ["border-fail-700", "text-fail-500"];
			default:
				return ["border-neutral-800", "text-black"];
		}
	})();

	return (
		<div
			className={`flex items-center p-1 pl-3 rounded-lg h-12 w-full bg-neutral-800 border-2 lato-regular text-[16px] ${fontColor} ${borderColor}`}
		>
			{text}
		</div>
	);
};

export default GuessHistory;
