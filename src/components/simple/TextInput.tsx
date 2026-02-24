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
        <div className="flex flex-col w-full gap-2">
            <p className="body-l-b text-neutral-50">{text}</p>

            <input
                {...register(field)}
                type={type}
                placeholder={`Enter your ${placeholder}`}
                className="w-full px-4 py-3 border-2 rounded-xl bg-neutral-900 border-neutral-700 text-neutral-50 placeholder:text-neutral-600 body-m-r hover:border-neutral-500 outline-none focus:ring focus:ring-neutral-300 transition-standard"
            />
        </div>
    );
};

export default TextInput;
