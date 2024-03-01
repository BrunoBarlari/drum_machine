import { configureStore } from "@reduxjs/toolkit";
import soundReducer from "./reducer";

export const Store = configureStore({
	reducer: {
		sound: soundReducer,
	},
});
