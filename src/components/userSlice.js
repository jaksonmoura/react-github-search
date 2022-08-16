import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	login: "jaksonmoura",
	avatar_url: "https://avatars.githubusercontent.com/u/612879?v=4",
	html_url: "https://github.com/jaksonmoura",
	repos_url: "https://api.github.com/users/jaksonmoura/repos",
	name: "Jakson Moura",
	location: "Tocantins - Brazil",
	email: "jrochelly@gmail.com",
	bio: "Front end developer",
	public_repos: 45,
	public_gists: 10,
	followers: 6,
	following: 8,
	repos: [],
};

export const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		setCurrentUser: (state, action) => {
			return { ...action.payload };
		},
		setUserRepos: (state, action) => {
			return { ...state, repos: action.payload };
		},
	},
});

export const { setCurrentUser, setUserRepos } = userSlice.actions;

export default userSlice.reducer;
