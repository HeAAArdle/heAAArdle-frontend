type ButtonType = "primary" | "secondary" | "destructive" | "cancel";

type ButtonProps = {
	text: string;
	onClick: () => null;
	type: ButtonType;
};

const Button = ({ text, onClick, type }: ButtonProps) => {
	const buttonClasses = (() => {
		switch (type) {
			case "primary":
				return "h-13 text-neutral-950 bg-primary-300 hover:bg-primary-500 disabled:opacity-60";
			case "secondary":
				return "h-10 text-neutral-50 bg-accent-800 hover:bg-accent-950 disabled:opacity-60";
			case "destructive":
				return "h-13 text-neutral-50 bg-fail-500 hover:bg-fail-700 disabled:opacity-60";
			default:
				return "h-13 text-neutral-50 bg-neutral-950 border-2 border-neutral-500 hover:bg-neutral-800 disabled:opacity-60";
		}
	})();

	// NOTES: not sure pa how to implement the width (since nagbabago depende sa usecase)
	return (
		<button
			className={`px-10 rounded-4xl text-xl lato-bold cursor-pointer ${buttonClasses}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
