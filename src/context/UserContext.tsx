import { createContext } from "react";
import type { ReactNode } from "react";

type UserContextType = {
	noOfGuesses: number;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const noOfGuesses = 6;

	const value = { noOfGuesses };

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};
