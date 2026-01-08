type GuessInputProps = {
	value: string;
	onChange: (value: string) => void;
};

const GuessInput = ({ value, onChange }: GuessInputProps) => {
	return (
		// <div className="w-fit relative">
		// 	<input
		// 		className="border-2 rounded-[10px] h-16 w-96 p-4 pr-20 text-xl"
		// 		type="text"
		// 		value={value}
		// 		placeholder="Type your guess.."
		// 		onChange={(e) => onChange(e.target.value)}
		// 	/>
		// 	<button className="absolute flex items-center justify-center bg-gray-400 rounded-[5px] h-10 p-2 top-1/2 right-4 -translate-y-1/2 text-xl">
		// 		GUESS
		// 	</button>
		// </div>
		<div className="flex items-center gap-2 border-2 rounded-[10px] p-2 w-fit">
			<input type="text" />
			<button>GUESS</button>
		</div>
	);
};

export default GuessInput;
