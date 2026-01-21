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

const PasswordInput = ({
	isSignIn,
	passwordStrength,
	register,
}: PasswordInputProps) => {
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);

	const pwStrengthText = (() => {
		switch (passwordStrength) {
			case 1:
				return "Password is too short and easy to guess.";
			case 2:
				return "Add numbers or symbols to strengthen your password.";
			case 3:
				return "Good, but adding more variation will make it stronger.";
			case 4:
				return "Strong password.";
			default:
				return "Very strong password.";
		}
	})();

	return (
		<div className="w-full space-y-2">
			<div className="flex justify-between">
				<span className="text-neutral-50 lato-bold text-lg">
					Password
				</span>
				{isSignIn && (
					<span className="text-primary-500 lato-bold text-lg underline">
						Forgot Password?
					</span>
				)}
			</div>
			<div className="flex items-center justify-between gap-4 h-12.5 border-2 bg-neutral-900 border-neutral-700 rounded-xl p-4 w-full">
				<input
					type={passwordIsVisible ? "text" : "password"}
					placeholder="Enter your password.."
					{...register("password", {
						required: true,
						validate: (value: string) => {
							const result = getPasswordStrength(value);
							return result == null ? false : result >= 3;
						},
					})}
					className={`${passwordIsVisible ? "text-neutral-50" : "text-neutral-600"} lato-regular text-[16px] w-full outline-none`}
				/>
				<div
					onClick={() => setPasswordIsVisible((prev) => !prev)}
					className="w-fit h-fit"
				>
					{passwordIsVisible ? (
						<EyesClosedIcon className="w-7.5 h-7.5 text-neutral-50" />
					) : (
						<EyesOpenIcon className="w-7.5 h-7.5 text-neutral-600" />
					)}
				</div>
			</div>
			{!isSignIn && passwordStrength && (
				<div className="w-full h-fit">
					<div className="flex w-full h-2 rounded-2xl">
						<div
							className={`${passwordStrength > 2 ? "bg-success-100" : passwordStrength === 1 ? "bg-fail-700" : "bg-warning-700"} h-full w-full rounded-l-2xl`}
						/>
						<div
							className={`${passwordStrength > 2 ? "bg-success-300" : passwordStrength === 1 ? "bg-neutral-50" : "bg-warning-500"} h-full w-full`}
						/>
						<div
							className={`${passwordStrength < 3 ? "bg-neutral-50" : "bg-success-500"} h-full w-full`}
						/>
						<div
							className={`${passwordStrength < 4 ? "bg-neutral-50" : "bg-success-700"} h-full w-full`}
						/>
						<div
							className={`${passwordStrength < 5 ? "bg-neutral-50" : "bg-success-800"} h-full w-full rounded-r-2xl`}
						/>
					</div>
					<span className="text-neutral-50 lato-regular text-[14px]">
						{pwStrengthText}
					</span>
				</div>
			)}
		</div>
	);
};

export default PasswordInput;
