import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./components/historySlice";
import userSlice from "./components/userSlice";

const store = configureStore({
	reducer: {
		user: userSlice,
		history: historySlice,
	},
});

export default store;
