import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient.ts";
import { UserProvider } from "./context/UserContext.tsx";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<UserProvider>
				<App />
				{/* <ReactQueryDevtools /> */}
			</UserProvider>
		</BrowserRouter>
	</QueryClientProvider>
);
