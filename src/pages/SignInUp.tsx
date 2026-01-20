import Button from "../components/simple/Button";
import TextInput from "../components/simple/TextInput";
import SignInIcon from "../icons/SignInIcon";
import PasswordInput from "../components/simple/PasswordInput";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { CredentialFormFields } from "../types";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import { Link } from "react-router-dom";
import { useSignIn } from "../services/api/account/sign-in";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import {
	getPasswordStrength,
	type PasswordStrength,
} from "../utils/getPasswordStrength";
import { useSignUp } from "../services/api/account/sign-up";

type SignInUpProps = {
	isSignIn: boolean;
};

const SignInUp = ({ isSignIn }: SignInUpProps) => {
	const { register, handleSubmit, watch, reset } =
		useForm<CredentialFormFields>();
	const [passwordStrength, setPasswordStrength] =
		useState<PasswordStrength | null>(null);
	const passwordText = watch("password");
	const debouncedValue = useDebounce(passwordText);

	useEffect(() => {
		setPasswordStrength(getPasswordStrength(debouncedValue));
	}, [debouncedValue]);

	const { mutate: signin } = useSignIn();
	const { mutate: signup } = useSignUp();

	const onSubmit: SubmitHandler<CredentialFormFields> = (data) => {
		if (isSignIn) signin(data);
		else signup(data);
	};

	return (
		<div className="h-full flex items-center justify-center">
			<div className="relative">
				{/* back button */}
				<Link
					to={`/${isSignIn ? "" : "signin"}`}
					onClick={() => {
						reset();
						setPasswordStrength(null);
					}}
					className="absolute top-12 left-12 w-12 h-12 text-neutral-50"
				>
					<LeftArrowIcon />
				</Link>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col items-center justify-around py-12 gap-3 px-32 w-160 h-161.5  shadow-2xl shadow-[#36327D]/30 rounded-[48px] border-4 border-neutral-300/40"
				>
					<div className="flex flex-col w-full items-center justify-center gap-3">
						<SignInIcon className="w-18 h-18" />
						<span className="dm-sans-400 font-b text-5xl leading-normal bg-linear-to-br from-primary-400 to-accent-300 bg-clip-text text-transparent">
							Sign {isSignIn ? "In" : "Up"}
						</span>
						<TextInput
							{...register("username", { required: true })}
							text="Username"
							type="text"
							placeholder="username"
							field="username"
							register={register}
						/>
						<PasswordInput
							isSignIn={isSignIn}
							passwordStrength={passwordStrength}
							register={register}
						/>
					</div>
					<div className="w-full flex flex-col items-center gap-3">
						<Button
							text={`Sign ${isSignIn ? "In" : "Up"}`}
							type="primary"
							full={true}
							htmlType="submit"
						/>
						<div className="text-neutral-300 lato-regular">
							{isSignIn ? "Don't" : "Already"} have an account?{" "}
							<Link
								to={`/${isSignIn ? "signup" : "signin"}`}
								onClick={() => {
									reset();
									setPasswordStrength(null);
								}}
							>
								<span className="text-primary-500 underline font-bold cursor-pointer">
									Sign {isSignIn ? "Up" : "In"}
								</span>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignInUp;
