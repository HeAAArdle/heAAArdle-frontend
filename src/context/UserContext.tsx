import { createContext } from "react";
import type { ReactNode } from "react";
import { useSongs } from "../services/queries/songs";

type UserContextType = {};

export const UserContext = createContext<UserContextType | undefined>(
	undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const noOfGuesses = 6;

	const {
		data: SONGS,
		isLoading: isSongsLoading,
		error: songsError,
	} = useSongs();

	const value = { SONGS, isSongsLoading, songsError, noOfGuesses };

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};
