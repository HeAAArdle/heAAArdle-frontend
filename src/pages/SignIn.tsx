import Button from "../components/simple/Button";
import SignInIcon from "../icons/SignInIcon";

const SignIn = () => {
	return (
		<div className="h-full flex items-center justify-center">
			<div>
				<button></button>
				<div className="flex flex-col items-center justify-center w-160 h-161.5 rounded-[48px] border-4 border-neutral-300/40">
					{/* Icon */}
					<SignInIcon className="w-18 h-18" />
					<span className="dm-sans-400 font-b text-5xl bg-linear-to-br from-primary-400 to-accent-300 bg-clip-text text-transparent">
						Sign In
					</span>
					{/* Input */}
					{/* Input */}
					<Button text="Sign Up" type="primary" />
					Already have an account? <span>Sign In</span>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
