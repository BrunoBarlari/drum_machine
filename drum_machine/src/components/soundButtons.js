import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import sound1 from "../media/sound1.mp3";
import sound2 from "../media/sound2.mp3";
import sound3 from "../media/sound3.mp3";
import sound4 from "../media/sound4.mp3";
import sound5 from "../media/sound5.mp3";
import sound6 from "../media/sound6.mp3";
import sound7 from "../media/sound7.mp3";
import sound8 from "../media/sound8.mp3";
import sound9 from "../media/sound9.mp3";
import { changeName } from "../redux/reducer";

export const SoundPad = ({ id, src, name }) => {
	const dispatch = useDispatch();
	const audioVolume = useSelector((state) => state.sound.volume);

	const handleClick = () => {
		const audioElement = document.getElementById(id);
		audioElement.volume = audioVolume / 100;
		audioElement.currentTime = 0;
		audioElement.play();
		dispatch(changeName(name));
	};

	return (
		<div>
			<audio id={id} className="clip" preload="auto">
				<source src={src} type="audio/mpeg" />
			</audio>
			<Button variant="contained" onClick={handleClick}>
				{id}
			</Button>
		</div>
	);
};

export const DrumPad = () => {
	const SOUNDS = [
		{ id: "Q", src: sound1, name: "Heater 1" },
		{ id: "W", src: sound2, name: "Heater 2" },
		{ id: "E", src: sound3, name: "Heater 3" },
		{ id: "A", src: sound4, name: "Heater 4" },
		{ id: "S", src: sound5, name: "Clap" },
		{ id: "D", src: sound6, name: "Open-HH" },
		{ id: "Z", src: sound7, name: "Kick-n'-Hat" },
		{ id: "X", src: sound8, name: "Kick" },
		{ id: "C", src: sound9, name: "Closed-HH" },
	];

	return (
		<div>
			{SOUNDS.map((pad) => (
				<SoundPad key={pad.id} {...pad} />
			))}
		</div>
	);
};
