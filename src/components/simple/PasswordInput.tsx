import { useState } from "react";
import EyesClosedIcon from "../../icons/EyesClosedIcon";
import EyesOpenIcon from "../../icons/EyesOpenIcon";
import type { UseFormRegister } from "react-hook-form";
import type { CredentialFormFields } from "../../types";
import { getPasswordStrength } from "../../utils/getPasswordStrength";

type PasswordStrength = 1 | 2 | 3 | 4 | 5;

type PasswordInputProps = {
    isSignIn: boolean;
    passwordStrength: PasswordStrength | null;
    register: UseFormRegister<CredentialFormFields>;
};

const PASSWORD_STRENGTH_TEXT: Record<PasswordStrength | "default", string> = {
    1: "Password is too short and easy to guess.",
    2: "Add numbers or symbols to strengthen your password.",
    3: "Good, but adding more variation will make it stronger.",
    4: "Strong password.",
    5: "Very strong password.",
    default: "Enter a password between 8-32 characters long.",
};

const PasswordInput = ({
    isSignIn,
    passwordStrength,
    register,
}: PasswordInputProps) => {
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    const pwStrengthText =
        (passwordStrength
            ? PASSWORD_STRENGTH_TEXT[passwordStrength]
            : undefined) || PASSWORD_STRENGTH_TEXT.default;

    const strengthBarColors = (strength: PasswordStrength) => [
        strength === 1
            ? "bg-fail-700"
            : strength > 2
              ? "bg-success-100"
              : "bg-warning-700",
        strength === 1
            ? "bg-neutral-50"
            : strength > 2
              ? "bg-success-300"
              : "bg-warning-500",
        strength < 3 ? "bg-neutral-50" : "bg-success-500",
        strength < 4 ? "bg-neutral-50" : "bg-success-700",
        strength < 5 ? "bg-neutral-50" : "bg-success-800",
    ];

    return (
        <div className="w-full space-y-2">
            {/* Header */}
            <div className="flex justify-between">
                <span className="body-l-b text-neutral-50">Password</span>

                {isSignIn && (
                    <span className="body-l-b underline text-primary-500">
                        Forgot Password?
                    </span>
                )}
            </div>

            {/* Input Field */}
            <div className="group flex items-center justify-between w-full px-4 py-3 border-2 rounded-xl bg-neutral-900 border-neutral-700 hover:border-neutral-500 outline-none focus:ring focus:ring-neutral-300 transition-standard">
                <input
                    type={passwordIsVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    {...register("password", {
                        required: true,
                        validate: (value: string) => {
                            const result = getPasswordStrength(value);
                            return result != null && result >= 3;
                        },
                    })}
                    className="flex-1 w-full body-m-r outline-none text-neutral-50 placeholder:text-neutral-600"
                />

                {/* Show Password Toggle */}
                <div
                    onClick={() => setPasswordIsVisible((prev) => !prev)}
                    className="w-fit h-fit cursor-pointer"
                >
                    {passwordIsVisible ? (
                        <EyesClosedIcon className="w-7.5 aspect-square text-neutral-600 hover:text-neutral-50 transition-standard" />
                    ) : (
                        <EyesOpenIcon className="w-7.5 aspect-square text-neutral-600 hover:text-neutral-50 transition-standard" />
                    )}
                </div>
            </div>

            {/* Password Strength */}
            {!isSignIn && passwordStrength && (
                <div className="w-full h-fit space-y-1">
                    <div className="flex w-full h-2 rounded-2xl overflow-hidden">
                        {strengthBarColors(passwordStrength).map(
                            (color, index) => (
                                <div
                                    key={index}
                                    className={`w-1/5 h-full 
                                        ${index === 0 ? "rounded-l-2xl" : ""} 
                                        ${index === 4 ? "rounded-r-2xl" : ""} 
                                        ${color}
                                    `}
                                />
                            ),
                        )}
                    </div>
                    <span className="body-s-r text-neutral-50">
                        {pwStrengthText}
                    </span>
                </div>
            )}
        </div>
    );
};

export default PasswordInput;
