import { useSongs } from "../../services/api/song/get-songs";

type GuessInputProps = {
	value: string;
	onChange: (value: string) => void;
	onClick: () => void;
};

const GuessInput = ({ value, onChange, onClick }: GuessInputProps) => {
	const { data: SONGS } = useSongs();

	const filtered = SONGS?.filter((song) =>
		song.title.toLowerCase().includes(value.toLowerCase())
	).map((item) => item.title);

	return (
		<div className="relative flex items-center gap-2 border-2 border-neutral-800 hover:border-neutral-600 active:border-neutral-600 bg-neutral-950 rounded-lg p-1 pl-3 w-full h-12">
			<input
				type="text"
				value={value}
				placeholder="Type your guess.."
				onChange={(e) => onChange(e.target.value)}
				className="h-12 w-full outline-none lato-regular text-lg text-neutral-700"
			/>
			<button
				onClick={onClick}
				className="h-full px-3 py-2 bg-primary-300 hover:bg-primary-500 cursor-pointer rounded-sm flex items-center justify-center lato-bold text-neutral-950 text-[16px]"
			>
				Guess
			</button>
			{value !== "" ? (
				<ul className="absolute top-12 left-0 z-10 w-full bg-white border rounded mt-1">
					{filtered?.map((item, index) => (
						<li
							key={index}
							onClick={() => onChange(item)}
							className="px-3 py-2 cursor-pointer h-fit"
						>
							{item}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default GuessInput;
