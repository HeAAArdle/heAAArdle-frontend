import CloseIcon from "../../icons/CloseIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import Button from "../simple/Button";

type SettingsType = {
	signout: () => void;
	deleteAcct: (value: boolean) => void;
	isOpen: (value: boolean) => void;
};

const Settings = ({ signout, deleteAcct, isOpen }: SettingsType) => {
	return (
		<div className="absolute -bottom-8 left-12">
			<div className="relative left-10 flex flex-col gap-6 whitespace-nowrap bg-neutral-950 rounded-3xl p-12 w-160 shadow-lg shadow-primary-400/30">
				<button
					onClick={() => isOpen(false)}
					className="absolute w-8 h-8 text-neutral-50 top-6 right-6 cursor-pointer"
				>
					<CloseIcon />
				</button>
				<div className="flex items-center gap-3">
					<SettingsIcon className="w-18 h-18 text-primary-500" />
					<span className="text-5xl dm-sans-400 font-bold text-primary-500">
						Account Actions
					</span>
				</div>
				<div className="flex justify-around gap-3">
					<Button
						text="Sign Out"
						onClick={() => {
							isOpen(false);
							signout();
						}}
						full={true}
						variant="cancel"
					/>
					<Button
						full={true}
						text="Delete Account"
						onClick={() => {
							isOpen(false);
							deleteAcct(true);
						}}
						variant="destructive"
					/>
				</div>
			</div>
		</div>
	);
};

export default Settings;
