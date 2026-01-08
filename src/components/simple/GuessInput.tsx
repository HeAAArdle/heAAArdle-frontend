type GuessInputProps = {
	value: string;
	onChange: (value: string) => void;
};

const GuessInput = ({ value, onChange }: GuessInputProps) => {
	return (
		<div className="flex items-center gap-2 border-2 rounded-[10px] p-4 w-fit h-16">
			<input
				type="text"
				value={value}
				placeholder="Type your guess.."
				onChange={(e) => onChange(e.target.value)}
				className="h-12 w-64 px-4 outline-none lato-regular"
			/>
			<button className="h-10 px-4 bg-gray-400 rounded-[5px] flex items-center justify-center lato-bold">
				GUESS
			</button>
		</div>
	);
};

export default GuessInput;
