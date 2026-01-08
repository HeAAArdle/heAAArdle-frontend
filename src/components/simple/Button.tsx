type ButtonType = "primary" | "secondary" | "destructive";

type ButtonProps = {
	text: string;
	onClick: () => null;
	type: ButtonType;
};

const Button = ({ text, onClick, type }: ButtonProps) => {
	return (
		<button
			className={`border-2 px-10 py-1 rounded-[10px] text-xl lato-bold ${type === "primary" ? "bg-primary-300" : ""} ${type === "destructive" ? "text-destructive border-destructive" : ""}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
