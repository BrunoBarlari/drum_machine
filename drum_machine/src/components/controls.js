import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOnOff, changeVolume } from "../redux/reducer";

export const VolumeSlider = () => {
	const actualVolume = useSelector((state) => state.sound.volume);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		dispatch(changeVolume(event.target.value));
	};

	return (
		<div>
			<Box sx={{ width: 200 }}>
				<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
					<VolumeDown />
					<Slider
						aria-label="Volume"
						value={actualVolume}
						onChange={handleChange}
					/>
					<VolumeUp />
				</Stack>
				<div>
					<h2>Volume: {actualVolume}</h2>
				</div>
			</Box>
		</div>
	);
};

export const OnOffSwitch = () => {
	const isOn = useSelector((state) => state.sound.on);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		dispatch(changeOnOff(event.target.checked));
	};

	return (
		<div>
			<Switch
				checked={isOn}
				onChange={handleChange}
				inputProps={{ "aria-label": "controlled" }}
			></Switch>
		</div>
	);
};

export const SoundName = () => {
	const name = useSelector((state) => state.sound.name);

	return (
		<div>
			<Box>
				<TextField
					id="filled-basic"
					variant="filled"
					InputProps={{
						readOnly: true,
					}}
					value={name}
				/>
			</Box>
		</div>
	);
};
