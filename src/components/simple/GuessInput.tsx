import { useMemo, useState } from "react";
import { useSongs } from "../../services/api/song/get-songs";

type GuessInputProps = {
    value: string;
    onChange: (value: string) => void;
    onClick: () => void;
};

const GuessInput = ({ value, onChange, onClick }: GuessInputProps) => {
    const { data: songs } = useSongs();

    const [isOpen, setIsOpen] = useState(false);

    const filteredSongTitles = useMemo(() => {
        if (!songs || value === "") return [];

        const query = value.toLowerCase().trim();

        return songs
            .filter(
                (song) =>
                    song.title.toLowerCase().includes(query) &&
                    song.title.toLowerCase() !== query,
            )
            .map((song) => song.title);
    }, [songs, value]);

    return (
        <div
            className={`relative flex items-center gap-2 w-full h-12 pr-1 pl-3 py-1 rounded-lg border-2 bg-neutral-950 transition-standard
			${value ? "border-neutral-600" : "border-neutral-800"}
		`}
            onBlur={() => setIsOpen(false)}
            tabIndex={-1}
        >
            <input
                type="text"
                value={value}
                placeholder="Type your guess..."
                onChange={(e) => {
                    onChange(e.target.value);
                    setIsOpen(true);
                }}
                className="flex-1 outline-none bg-transparent lato-regular text-base text-neutral-50 placeholder:text-neutral-700"
            />

            <button
                onClick={onClick}
                disabled={value === ""}
                aria-disabled={value === ""}
                className="h-full px-3 py-2 rounded flex items-center justify-center lato-bold text-base text-neutral-950 bg-primary-300 hover:bg-primary-500 transition-standard disabled:opacity-60 disabled:cursor-not-allowed"
            >
                Guess
            </button>

            {isOpen && filteredSongTitles.length > 0 && (
                <ul className="absolute top-full left-0 z-10 mt-2 w-full rounded-lg outline-2 outline-neutral-300 bg-neutral-50 shadow-md lato-regular text-base text-neutral-950 transition-standard max-h-60 overflow-y-auto">
                    {filteredSongTitles.map((title, index) => (
                        <li
                            key={index}
                            onMouseDown={(e) => {
                                e.preventDefault();

                                onChange(title);
                                setIsOpen(false);
                            }}
                            className="px-3 py-2 cursor-pointer hover:bg-neutral-200 first:rounded-t-lg last:rounded-b-lg"
                        >
                            {title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default GuessInput;
