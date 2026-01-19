export type PasswordStrength = 1 | 2 | 3 | 4 | 5;

export function getPasswordStrength(password: string): PasswordStrength | null {
	if (password === null || password === undefined || password === "")
		return null;

	let strength: PasswordStrength = 1;

	const length = password.length;
	const hasLower = /[a-z]/.test(password);
	const hasUpper = /[A-Z]/.test(password);
	const hasNumber = /\d/.test(password);
	const hasSymbol = /[^a-zA-Z0-9]/.test(password);

	const typesCount = [hasLower, hasUpper, hasNumber, hasSymbol].filter(
		Boolean,
	).length;

	if (length < 8 || typesCount === 1) {
		strength = 1; // Very Weak
	} else if (length >= 8 && typesCount === 2) {
		strength = 3; // Moderate
	} else if (length >= 10 && typesCount === 3) {
		strength = 4; // Strong
	} else if (length >= 12 && typesCount === 4) {
		strength = 5; // Very Strong
	} else {
		strength = 2; // Weak
	}

	return strength;
}
