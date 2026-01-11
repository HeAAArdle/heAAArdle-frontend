import { useState } from "react";
import PasswordInput from "../components/simple/PasswordInput";

const Test = () => {
	const [text, setText] = useState("");

	return (
		<div className="h-full flex items-center justify-center w-full">
			<div className="h-full flex flex-col items-center justify-center w-96 gap-4">
				<PasswordInput
					value={text}
					onChange={setText}
					isSignIn={true}
				/>
				<PasswordInput
					value={text}
					onChange={setText}
					isSignIn={true}
					passwordStrength={1}
				/>
				<PasswordInput
					value={text}
					onChange={setText}
					isSignIn={true}
					passwordStrength={2}
				/>
				<PasswordInput
					value={text}
					onChange={setText}
					isSignIn={true}
					passwordStrength={3}
				/>
				<PasswordInput
					value={text}
					onChange={setText}
					isSignIn={true}
					passwordStrength={4}
				/>
				<PasswordInput
					value={text}
					onChange={setText}
					isSignIn={true}
					passwordStrength={5}
				/>
			</div>
		</div>
	);
};

export default Test;
