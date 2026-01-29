type GuessResult = "correct" | "incorrect" | "unanswered";

type GuessHistoryProps = {
    result: GuessResult;
    text?: string;
};

const GuessHistory = ({ result, text }: GuessHistoryProps) => {
    const resultClasses: Record<GuessResult, string> = {
        correct: "text-success-300 bg-success-700/40 border-success-700",
        incorrect: "text-fail-300 bg-fail-700/40 border-fail-700",
        unanswered: "bg-neutral-900/60 border-neutral-800",
    };

    return (
        <div className={`flex items-center justify-start pr-1 pl-3 py-1 rounded-lg h-12 w-full border-2 lato-regular text-base ${resultClasses[result]}`}>{text}</div>
    );
};

export default GuessHistory;
