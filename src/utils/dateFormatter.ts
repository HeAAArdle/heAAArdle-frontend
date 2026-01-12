// date is mm-dd-yy
const dateFormatter = (date: string) => {
	return date.replaceAll("-", "/");
};

export default dateFormatter;
