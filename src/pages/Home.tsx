import React, { useEffect } from "react";
import Form from "../components/Form";
import UserProfile from "../components/UserProfile";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setCurrentUser } from "../components/userSlice";
import Api from "../Api";
import UserRepositories from "../components/UserRepositories";
import { UserInterface } from "../types/user";

const Home = () => {
	const defaultUsername = "jaksonmoura";
	const dispatch = useAppDispatch();
	const user: UserInterface = useAppSelector((state) => state.user);
	let username = new URLSearchParams(document.location.search).get("username") || "";

	useEffect(() => {
		if (user.message === "Not Found") return;
		if (username === user.login && user.login === defaultUsername) return;
		const handlePageLoad = async () => {
			// if so, fetch and set it to the store
			const newUser = await Api.fetchUserWithRepos(username || defaultUsername);
			dispatch(setCurrentUser(newUser));
		};
		handlePageLoad();
	}, [username, user.login, user.message, dispatch]);

	return (
		<>
			<Form />
			<UserProfile />
			<UserRepositories />
		</>
	);
};

export default Home;
