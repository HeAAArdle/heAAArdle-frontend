import { useState } from "react";
import Button from "../components/simple/Button";
import TextInput from "../components/simple/TextInput";
import SignInIcon from "../icons/SignInIcon";

const SignIn = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="h-full flex items-center justify-center">
			<div>
				{/* back button */}
				<button></button>
				<div className="flex flex-col items-center justify-around py-12 gap-3 px-32 w-160 h-161.5  shadow-2xl shadow-[#36327D]/30 rounded-[48px] border-4 border-neutral-300/40">
					<div className="flex flex-col w-full items-center justify-center gap-3">
						<SignInIcon className="w-18 h-18" />
						<span className="dm-sans-400 font-b text-5xl leading-normal bg-linear-to-br from-primary-400 to-accent-300 bg-clip-text text-transparent">
							Sign In
						</span>
						<TextInput
							text="Username"
							type="text"
							value={username}
							onChange={setUsername}
							placeholder="username"
						/>
						<TextInput
							text="Password"
							type="password"
							value={password}
							onChange={setPassword}
							placeholder="Password"
						/>
					</div>
					<div className="w-full flex flex-col items-center gap-3">
						<Button text="Sign Up" type="primary" full={true} />
						<div className="text-neutral-300 lato-regular">
							Already have an account?{" "}
							<span className="text-primary-500 underline font-bold">
								Sign Up
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
