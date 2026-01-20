const RESULT_MODES = ["original", "daily"] as const;
type ResultMode = (typeof RESULT_MODES)[number];

export function isResultMode(mode: string): mode is ResultMode {
	return RESULT_MODES.includes(mode as ResultMode);
}
