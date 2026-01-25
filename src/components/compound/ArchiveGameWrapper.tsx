import { useParams } from "react-router-dom";
import OriginalGame from "../../pages/OriginalGame";

const ArchiveGameWrapper = () => {
	const { date } = useParams();
	return <OriginalGame mode="archive" key={date} />;
};

export default ArchiveGameWrapper;
