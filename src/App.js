import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import ItemsList from "./components/ItemsList";
import ItemsDetails from "./components/ItemsDetails";

function App() {
	return (
		<BrowserRouter>
			<Route path={"/item/:id"} component={ItemsDetails} />
			<Route path="/" exact component={ItemsList} />
		</BrowserRouter>
	);
}

export default App;
