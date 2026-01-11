type TextInputProps = {
	text: string;
	type: "text" | "password";
	value: string;
	onChange: (value: string) => void;
	placeholder: string;
};

const TextInput = ({
	text,
	type,
	value,
	onChange,
	placeholder,
}: TextInputProps) => {
	return (
		<div className="w-full">
			<span className="text-neutral-50 lato-bold text-lg">{text}</span>
			<input
				type={type}
				value={value}
				placeholder={`Enter your ${placeholder}..`}
				onChange={(e) => onChange(e.target.value)}
				className="h-12.5 border-2 bg-neutral-900 border-neutral-700 text-neutral-600 rounded-xl p-4 w-full lato-regular text-[16px]"
			/>
		</div>
	);
};

export default TextInput;
