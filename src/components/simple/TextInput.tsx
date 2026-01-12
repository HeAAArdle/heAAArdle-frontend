import type { UseFormRegister } from "react-hook-form";
import type { CredentialFormFields } from "../../types";

type TextInputProps = {
	text: string;
	type: "text" | "password";
	placeholder: string;
	field: keyof CredentialFormFields;
	register: UseFormRegister<CredentialFormFields>;
};

const TextInput = ({
	text,
	type,
	placeholder,
	field,
	register,
}: TextInputProps) => {
	return (
		<div className="w-full">
			<span className="text-neutral-50 lato-bold text-lg">{text}</span>
			<input
				{...register(field)}
				type={type}
				placeholder={`Enter your ${placeholder}..`}
				className="h-12.5 border-2 bg-neutral-900 border-neutral-700 text-neutral-600 rounded-xl p-4 w-full lato-regular text-[16px]"
			/>
		</div>
	);
};

export default TextInput;
