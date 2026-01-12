import { useState } from "react";
import DeleteAccount from "../components/modals/DeleteAccount";

const Test = () => {
	const [text, setText] = useState("");

	return (
		<div className="h-full flex items-center justify-center w-full">
			<div className="h-full flex flex-col items-center justify-center w-full gap-4">
				<DeleteAccount />
			</div>
		</div>
	);
};

export default Test;
