import WarningIcon from "../../icons/WarningIcon";
import Button from "../simple/Button";

type DeleteAccountType = {
	isOpen: (value: boolean) => void;
	deleteAcct: () => void;
};

const DeleteAccount = ({ isOpen, deleteAcct }: DeleteAccountType) => {
	return (
		<div className="absolute -bottom-8 left-22 bg-neutral-950 rounded-3xl w-160 p-12 shadow-lg shadow-primary-400/30">
			<div className="flex items-center text-fail-300 mb-8 gap-3">
				<WarningIcon className="w-18 h-18 text-fail-300" />
				<span className="dm-sans-400 font-bold text-5xl">
					Delete Account
				</span>
			</div>
			<div className="text-white lato-regular text-lg mb-8">
				Your profile, statistics, and leaderboard presence will be
				permanently removed. Once deleted, this action cannot be
				reversed.
			</div>
			<div className="flex justify-end gap-3">
				<Button
					text="Cancel"
					type="cancel"
					onClick={() => isOpen(false)}
				/>
				<Button
					text="Delete Account"
					type="destructive"
					onClick={deleteAcct}
				/>
			</div>
		</div>
	);
};

export default DeleteAccount;
