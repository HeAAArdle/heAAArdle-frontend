import { Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Leaderboard from "./pages/Leaderboard";

function App() {
	return (
		<div>
			<Routes>
				{/* TODO: Game is different how to know which is which smth */}
				<Route path="/" element={<Game />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/leaderboards" element={<Leaderboard />} />
			</Routes>
		</div>
	);
}

export default App;
