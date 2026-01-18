import { Route, Routes, useLocation } from "react-router-dom";
import SignInUp from "./pages/SignInUp";
import Leaderboard from "./components/compound/Leaderboard";
import NavigationBar from "./components/compound/NavigationBar";
import Background from "./components/simple/Background";
import Test from "./pages/Test";
import OriginalGame from "./pages/OriginalGame";
import DailyGame from "./pages/DailyGame";
import RapidGame from "./pages/RapidGame";
import LyricsGame from "./pages/LyricsGame";
import { useSongs } from "./services/api/song/get-songs";

function App() {
	const location = useLocation();
	const path = location.pathname;

	useSongs();

	return (
		<div className="relative h-screen w-full flex flex-col">
			<Background className="absolute w-screen h-screen z-[-1]" />
			<div className="h-full">
				{path !== "/signin" && path !== "/login" && <NavigationBar />}
				<Routes>
					{/* TODO: Check how daily game access date */}
					<Route path="/" element={<OriginalGame />} />
					<Route path="/daily" element={<DailyGame />} />
					<Route path="/daily/:date" element={<DailyGame />} />
					<Route path="/rapid" element={<RapidGame />} />
					<Route path="/lyrics" element={<LyricsGame />} />
					<Route
						path="/login"
						element={<SignInUp isSignIn={true} />}
					/>
					<Route
						path="/signin"
						element={<SignInUp isSignIn={false} />}
					/>
					<Route path="/test" element={<Test />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
