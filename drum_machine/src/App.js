import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import ControlPanel from "./ControlPanel";
import { DrumPad } from "./components/soundButtons";

function App() {
	return (
		<div className="App">
			<div id="drum-machine">
				<ControlPanel />
			</div>
			<DrumPad />
		</div>
	);
}

export default App;
