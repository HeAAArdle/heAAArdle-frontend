import { Route, Routes, useParams } from "react-router-dom";
import SignInUp from "./pages/SignInUp";
import Background from "./components/simple/Background";
import Test from "./pages/Test";
import OriginalGame from "./pages/OriginalGame";
import RapidGame from "./pages/RapidGame";
import LyricsGame from "./pages/LyricsGame";
import { useSongs } from "./services/api/song/get-songs";
import { useInitAuthFromStorage } from "./hooks/useInitAuthFromStorage";
import PageLayout from "./components/pageLayout/PageLayout";

function App() {
	useInitAuthFromStorage();

	useSongs();

	return (
		<div className="relative h-screen w-full flex flex-col">
			<Background className="absolute w-screen h-screen z-[-1]" />
			<PageLayout>
				<Routes>
					<Route
						path="/"
						element={
							<OriginalGame mode="original" key={"original"} />
						}
					/>
					<Route
						path="/daily"
						element={<OriginalGame mode="daily" key={"daily"} />}
					/>
					<Route
						path="/archive/:date"
						element={
							<OriginalGame
								mode="archive"
								key={useParams().date}
							/>
						}
					/>
					<Route path="/rapid" element={<RapidGame />} />
					<Route path="/lyrics" element={<LyricsGame />} />
					<Route
						path="/signin"
						element={<SignInUp isSignIn={true} />}
					/>
					<Route
						path="/signup"
						element={<SignInUp isSignIn={false} />}
					/>
					<Route path="/test" element={<Test />} />
				</Routes>
			</PageLayout>
		</div>
	);
}

export default App;
