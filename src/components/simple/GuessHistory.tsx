type GuessResult = "correct" | "incorrect" | "unanswered";

type GuessHistoryProps = {
	result: GuessResult;
	text?: string;
};

const GuessHistory = ({ result, text }: GuessHistoryProps) => {
	const GuessHistoryClasses = (() => {
		switch (result) {
			case "correct":
				return "text-success-300 bg-success-700/40 border-success-700";
			case "incorrect":
				return "text-fail-300 bg-fail-700/40 border-fail-700";
			default:
				return "bg-neutral-900/60 border-neutral-800";
		}
	})();

	return (
		<div
			className={`flex
				opacity-
				items-center p-1 pl-3 rounded-lg h-12 w-full border-2 lato-regular text-lg ${GuessHistoryClasses}`}
		>
			{text}
		</div>
	);
};

export default GuessHistory;
