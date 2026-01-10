import { Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Leaderboard from "./pages/Leaderboard";
import NavigationBar from "./components/compound/NavigationBar";

function App() {
	return (
		<div className="h-screen w-full overflow-hidden">
			<NavigationBar />
			<div className="ml-28 h-full">
				<Routes>
					{/* TODO: Game is different how to know which is which smth */}
					<Route path="/" element={<Game />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/leaderboards" element={<Leaderboard />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
