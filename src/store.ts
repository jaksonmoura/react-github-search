import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import historySlice from "./components/historySlice";
import userSlice from "./components/userSlice";

const store = configureStore({
	reducer: {
		user: userSlice,
		history: historySlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
