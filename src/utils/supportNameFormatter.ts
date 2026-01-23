export const supportNameFormatter = (name: string) => {
	if (name[0] === "A") return { left: "", right: name.slice(1) };
	return { left: "Justin ", right: "ndrei Gonzales" };
};
