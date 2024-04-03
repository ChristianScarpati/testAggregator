import AggregatorProvider from "./context/AggregatorProvider.tsx";
import HomePage from "./pages/Homepage.tsx";

function App() {
	return (
		<AggregatorProvider>
			<HomePage />
		</AggregatorProvider>
	);
}

export default App;
