import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	volume: 100,
	name: '',
	on: true,
};

export const controlSlice = createSlice({
	name: "sound",
	initialState,
	reducers: {
		changeVolume: (state, action) => {
			state.volume = action.payload;
		},

		changeOnOff: (state, action) => {
			state.on = action.payload;
		},
	},
});

export const { changeVolume, changeOnOff } = controlSlice.actions;
export default controlSlice.reducer; //Se exporta automaticamente como soundReducer
