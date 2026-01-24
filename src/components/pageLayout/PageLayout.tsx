import { useState, type JSX } from "react";
import NavigationBar from "../compound/NavigationBar";
import Support from "../modals/Support";

type PageLayoutProps = {
	children: JSX.Element;
};

const PageLayout = ({ children }: PageLayoutProps) => {
	const [isSupportOpen, setIsSupportOpen] = useState(false);
	return (
		<div className="relative w-full h-full">
			<NavigationBar />
			<div className="h-full w-full">{children}</div>
			<div className="absolute bottom-4 right-4 lato-regular text-neutral-50 text-[18px]">
				Support the{" "}
				<span
					onClick={() => setIsSupportOpen(true)}
					className="lato-bold text-accent-500 cursor-pointer z-1 border-b-2 border-accent-500"
				>
					Developers
				</span>
			</div>
			{isSupportOpen && (
				<Support onClick={() => setIsSupportOpen(false)} />
			)}
		</div>
	);
};

export default PageLayout;
