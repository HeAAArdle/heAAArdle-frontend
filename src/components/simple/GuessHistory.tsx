type GuessResult = "correct" | "incorrect" | "unanswered";

type GuessHistoryProps = {
    result: GuessResult;
    text?: string;
};

const RESULT_CLASSES: Record<GuessResult, string> = {
    correct: 
        "border-success-700 bg-success-700/40 text-success-300",
    incorrect: 
        "border-fail-700 bg-fail-700/40 text-fail-300",
    unanswered: 
        "border-neutral-800 bg-neutral-900/60",
};

const GuessHistory = ({ result, text }: GuessHistoryProps) => {
    return (
        <div
            className={`rounded-lg flex items-center justify-start h-12 w-full py-1 pl-3 pr-1 border-2 body-m-r ${RESULT_CLASSES[result]}`}
        >
            {text}
        </div>
    );
};

export default GuessHistory;
