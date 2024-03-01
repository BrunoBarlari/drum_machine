import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	volume: 100,
	name: "",
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

		changeName: (state, action) => {
			state.name = action.payload;
		},
	},
});

export const { changeVolume, changeOnOff, changeName } = controlSlice.actions;
export default controlSlice.reducer; //Se exporta automaticamente como soundReducer
