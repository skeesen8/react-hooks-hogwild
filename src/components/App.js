import React from "react";
import Nav from "./Nav";
import PigsCard from "./PigsCard";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<PigsCard pigs={hogs}/>
		</div>
	);
}

export default App;
