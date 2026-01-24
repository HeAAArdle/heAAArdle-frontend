import CloseIcon from "../../icons/CloseIcon";
import GithubIcon from "../../icons/GithubIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import SupportIcon from "../../icons/SupportIcon";
import portrait from "../../assets/portrait.jpg";
import { supportNameFormatter } from "../../utils/supportNameFormatter";

type SupportDataType = {
	image: string;
	name: string;
	role: string;
	githubLink: string;
	linkedInLink: string;
};

type SupportProps = {
	onClick: () => void;
};

const Support = ({ onClick }: SupportProps) => {
	const data: SupportDataType[] = [
		{
			image: portrait,
			name: "Adrianne Paul Abyado",
			role: "Backend Co-lead",
			githubLink: "",
			linkedInLink: "",
		},
		{
			image: portrait,
			name: "Angelo De Leon",
			role: "Backend Co-lead",
			githubLink: "",
			linkedInLink: "",
		},
		{
			image: portrait,
			name: "Justin Andrei Gonzales",
			role: "Frontend Lead",
			githubLink: "",
			linkedInLink: "",
		},
	];

	return (
		<div className="fixed inset-0 flex justify-center items-center z-50">
			<div className="relative flex flex-col bg-neutral-950 rounded-3xl p-12 gap-6 lato-regular shadow-2xl shadow-primary-500/30">
				<button
					onClick={onClick}
					className="absolute top-6 right-6 cursor-pointer"
				>
					<CloseIcon className="w-8 h-8 text-neutral-50" />
				</button>
				<div className="flex flex-col text-neutral-50 text-[18px] gap-3">
					<div className="flex items-center gap-3">
						<SupportIcon className="w-18 h-18 text-primary-500" />
						<span className="dm-sans-400 font-bold text-primary-500 text-5xl">
							Support Us
						</span>
					</div>
					<div className="whitespace-nowrap">
						Hello! We are{" "}
						<span className="lato-bold text-accent-300">AAA</span>.
						View our <span className="lato-bold">Github</span> and{" "}
						<span className="lato-bold">LinkedIn</span> profiles and
						follow us!
					</div>
				</div>
				<div className="flex gap-4">
					{data.map((person, index) => (
						<Person
							key={index}
							image={person.image}
							name={person.name}
							role={person.role}
							githubLink={person.githubLink}
							linkedInLink={person.linkedInLink}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

const Person = ({
	image,
	name,
	role,
	githubLink,
	linkedInLink,
}: SupportDataType) => {
	const { left, right } = supportNameFormatter(name);
	return (
		<div className="flex flex-col bg-neutral-900 rounded-3xl">
			<img
				src={image}
				className="w-46 h-46 rounded-t-2xl border-b-4 border-b-accent-500"
			/>
			<div className="flex flex-col p-3 gap-2">
				<div className="flex flex-col gap-1 text-neutral-300 text-[14px]">
					<span className="text-primary-200 text-4 lato-bold">
						{left}
						<span className="text-accent-500">A</span>
						{right}
					</span>
					{role}
				</div>
				<div className="flex gap-1">
					<a
						href={githubLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<GithubIcon className="w-5 h-5 text-primary-300" />
					</a>
					<a
						href={linkedInLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedInIcon className="w-5 h-5 text-primary-300" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Support;
