type TextInputProps = {
	value: string;
	onChange: (value: string) => void;
	placeholder: string;
};

const TextInput = ({ value, onChange, placeholder }: TextInputProps) => {
	return (
		<input
			type="text"
			value={value}
			placeholder={`Enter your ${placeholder}..`}
			onChange={(e) => onChange(e.target.value)}
			className="h-16 border-2 rounded-[10px] p-4 w-64 lato-regular"
		/>
	);
};

export default TextInput;
