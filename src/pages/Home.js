import React, { useEffect } from "react";
import Form from "../components/Form";
import UserProfile from "../components/UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../components/userSlice";
import Api from "../Api";
import UserRepositories from "../components/UserRepositories";

const Home = () => {
	const defaultUsername = "jaksonmoura";
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	let username = new URLSearchParams(document.location.search).get("username");

	useEffect(() => {
		if (username === user.login || user.login === defaultUsername) return;
		const handlePageLoad = async () => {
			// if so, fetch and set it to the store
			const newUser = await Api.fetchUserWithRepos(username || defaultUsername);
			dispatch(setCurrentUser(newUser));
		};
		handlePageLoad();
	}, [username, user, dispatch]);

	return (
		<>
			<Form />
			<UserProfile />
			<UserRepositories />
		</>
	);
};

export default Home;
