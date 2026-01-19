type PasswordStrength = 1 | 2 | 3 | 4 | 5;

export function getPasswordStrength(password: string): PasswordStrength | null {
	if (!password) return null;

	let counter: PasswordStrength = 1;
	// check for symbols
	if (/[^a-zA-Z0-9]/.test(password)) counter++;
	// check for pw longer than 13 char
	if (password.length > 13) counter++;
	// check for numbers
	if (/[0-9]/.test(password)) counter++;
	// check for pw longer than 8 char
	if (password.length > 8) counter++;

	return Math.min(counter, 6) as PasswordStrength;
}
