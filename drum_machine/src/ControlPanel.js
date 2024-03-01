import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { OnOffSwitch, SoundName, VolumeSlider } from "./components/controls";

export default function ControlPanel() {
	return (
		<div className="ControlPanel">
			<VolumeSlider />
			<OnOffSwitch />
			<SoundName />
		</div>
	);
}
