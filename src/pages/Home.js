import React, { useEffect } from "react";
import Form from "../components/Form";
import UserProfile from "../components/UserProfile";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../components/userSlice";
import Api from "../Api";
import UserRepositories from "../components/UserRepositories";

const Home = () => {
	const dispatch = useDispatch();

	const handlePageLoad = async () => {
		let urlParams = new URLSearchParams(document.location.search).get("username");
		// check if url has username
		const user = await Api.fetchUserWithRepos(urlParams || "jaksonmoura");
		// if so, fetch and set it to the store

		dispatch(setCurrentUser(user));
	};

	useEffect(() => {
		handlePageLoad();
	});

	return (
		<>
			<Form />
			<UserProfile />
			<UserRepositories />
		</>
	);
};

export default Home;
