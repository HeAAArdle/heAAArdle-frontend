import { createContext } from "react";
import type { ReactNode } from "react";

type UserContextType = {
	noOfGuesses: number;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const noOfGuesses = 6;
	const lengthOfAudio = [1, 2, 4, 7, 11, 16];

	const value = { noOfGuesses, lengthOfAudio };

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};
