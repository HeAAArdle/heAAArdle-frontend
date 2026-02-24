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
        if (!songs || !value.trim()) return [];

        const query = value.toLowerCase().trim();
        const tokens = query.split(/\s+/);

        return songs
            .map((song) => song.title)
            .filter((title) => {
                const lower = title.toLowerCase();
                return (
                    tokens.every((token) => lower.includes(token)) &&
                    lower !== query
                );
            });
    }, [songs, value]);

    const hasSuggestions = isOpen && filteredSongTitles.length > 0;

    return (
        <div
            className={`relative flex items-center w-full h-12 pr-1 pl-3 py-1 rounded-lg border-2 bg-neutral-950 transition-standard
                ${value ? "border-neutral-600" : "border-neutral-800"}
            `}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
        >
            {/* Input */}
            <input
                type="text"
                value={value}
                placeholder="Type your guess..."
                onChange={(e) => onChange(e.target.value)}
                className="flex-1 bg-transparent outline-none body-m-r text-neutral-50 placeholder:text-neutral-700"
            />

            {/* Guess Button */}
            <button
                type="button"
                onClick={onClick}
                disabled={!value.trim()}
                className="rounded flex items-center justify-center h-full px-3 py-2 text-base font-bold font-['Lato'] tracking-tight text-neutral-950 bg-primary-300 hover:bg-primary-500 cursor-pointer transition-standard disabled:opacity-60 disabled:cursor-not-allowed"
            >
                Guess
            </button>

            {/* Suggestions */}
            {hasSuggestions && (
                <ul className="absolute top-full left-0 z-10 w-full max-h-60 mt-2 rounded-lg outline-2 bg-neutral-50 body-m-r text-neutral-950 shadow-md transition-standard overflow-y-auto">
                    {filteredSongTitles.map((title) => (
                        <li
                            key={title}
                            onMouseDown={(e) => {
                                e.preventDefault(); // keep input focused

                                onChange(title);
                                setIsOpen(false);
                            }}
                            className="px-3 py-2 cursor-pointer first:rounded-t-lg last:rounded-b-lg hover:bg-neutral-200"
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
