type GuessInputProps = {
	value: string;
	onChange: (value: string) => void;
};

const GuessInput = ({ value, onChange }: GuessInputProps) => {
	return (
		<div className="flex items-center gap-2 border-2 border-neutral-800 hover:border-neutral-600 active:border-neutral-600 bg-neutral-950 rounded-lg p-1 pl-3 w-full h-12">
			<input
				type="text"
				value={value}
				placeholder="Type your guess.."
				onChange={(e) => onChange(e.target.value)}
				className="h-12 w-full outline-none lato-regular text-lg text-neutral-700"
			/>
			<button className="h-full px-3 py-2 bg-primary-300 hover:bg-primary-500 cursor-pointer rounded-sm flex items-center justify-center lato-bold text-neutral-950 text-[16px]">
				Guess
			</button>
		</div>
	);
};

export default GuessInput;
