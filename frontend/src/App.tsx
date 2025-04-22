import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routers } from "./router/route";

function App() {
	return (
		<>
			<Router>
				<Routes>
					{routers.map((route, index) => (
						<Route key={index} path={route.path} element={<route.element/>} />
					))}
				</Routes>
			</Router>
		</>
	);
}

export default App;
