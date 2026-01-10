import { Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Leaderboard from "./pages/Leaderboard";
import NavigationBar from "./components/compound/NavigationBar";
import Background from "./components/simple/Background";

function App() {
	return (
		<div className="relative h-screen w-full flex flex-col">
			<Background className="absolute w-screen h-screen z-[-1]" />
			<div className="h-full">
				<NavigationBar />
				<Routes>
					{/* TODO: Game is different how to know which is which smth */}
					<Route path="/" element={<Game />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignIn />} />
					<Route path="/leaderboards" element={<Leaderboard />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
