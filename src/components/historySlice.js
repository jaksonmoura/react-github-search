import { createSlice } from "@reduxjs/toolkit";

let initialState = [
	{
		name: "zencarot",
		date: new Date().toLocaleString(),
	},
];

const historySlice = createSlice({
	name: "history",
	initialState: initialState,
	reducers: {
		createEntry: (state, action) => {
			return [{ name: action.payload, date: new Date().toLocaleString() }, ...state];
		},
		hydrate: (state, action) => {
			return action.payload;
		},
	},
});

export const { createEntry, hydrate } = historySlice.actions;

export default historySlice.reducer;
