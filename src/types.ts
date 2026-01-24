export type IconProps = {
	className?: string;
};

export type CredentialFormFields = {
	username: string;
	password: string;
};

export type InstructionProps = {
	onClick: () => void;
};

export type AuthInput = {
	username: string;
	password: string;
};

export type AuthData = {
	username: string;
	token: string;
};

export type AuthState = {
	isAuthenticated: boolean;
	username: string;
};

export type GameMode = "original" | "daily" | "rapid" | "lyrics" | "archive";
