import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { History } from "../types/history";

let initialState: History[] = [
	{
		name: "zencarot",
		date: new Date().toLocaleString(),
	},
];

const historySlice = createSlice({
	name: "history",
	initialState: initialState,
	reducers: {
		createEntry: (state, action: PayloadAction<string>) => {
			return [{ name: action.payload, date: new Date().toLocaleString() }, ...state];
		},
		hydrate: (state, action: PayloadAction<History[]>) => {
			return action.payload;
		},
	},
});

export const { createEntry, hydrate } = historySlice.actions;

export default historySlice.reducer;
