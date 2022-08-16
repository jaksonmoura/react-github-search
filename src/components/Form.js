import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Api from "../Api";
import { setCurrentUser } from "./userSlice";
import { createEntry } from "./historySlice";
import { useSearchParams } from "react-router-dom";
import * as S from "./Form.styles";

const Form = () => {
	const [userField, setUserField] = useState("");
	const [inputError, setInputError] = useState("");
	let [username, setUsername] = useSearchParams();
	const dispatch = useDispatch();

	useEffect(() => {
		let urlParams = username.get("username");
		if (!urlParams) return;
		setUserField(urlParams);
	}, [username]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (userField === "") {
			setInputError("Please enter a username");
			document.querySelector("input#username").focus();
			return;
		} else {
			setInputError("");
		}
		// fetch user
		const user = await Api.fetchUserWithRepos(userField);
		// if valid, dispatch it to the store.
		dispatch(setCurrentUser(user));
		dispatch(createEntry(user.login));
		// change url
		setUsername({ username: userField });
	};

	return (
		<S.FormWrapper aria-label="Search">
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type="search"
					id="username"
					name="username"
					placeholder="Search with username..."
					aria-label="Username"
					value={userField}
					onChange={(e) => setUserField(e.target.value)}
				/>
				{inputError.length > 0 && <span className="error-msg">{inputError}</span>}
				<button>Submit</button>
			</form>
		</S.FormWrapper>
	);
};

export default Form;
