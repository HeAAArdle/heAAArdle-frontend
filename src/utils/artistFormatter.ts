export const artistFormatter = (
	artists: string[],
	originalLength: number,
): string => {
	if (artists.length === 1) return artists[0];
	if (artists.length === 2)
		return `${artists[0]}${originalLength > 2 ? "," : ""} and ${artists[1]}`;

	return `${artists[0]}, ${artistFormatter(artists.slice(1), originalLength)}`;
};
