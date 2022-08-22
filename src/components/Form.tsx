import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Api from "../Api";
import { setCurrentUser } from "./userSlice";
import { createEntry } from "./historySlice";
import { useNavigate } from "react-router-dom";
import * as S from "./Form.styles";

const Form = () => {
	const [userField, setUserField] = useState("");
	const [inputError, setInputError] = useState("");
	let username = new URLSearchParams(document.location.search).get("username");
	const dispatch = useDispatch();
	let navigate = useNavigate();

	useEffect(() => {
		if (!username) return;
		setUserField(username);
	}, [username]);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (userField === "") {
			setInputError("Please enter a username");
			(document.querySelector("input#username") as HTMLElement)?.focus();
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
		navigate(`/search?username=${user.login}`);
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
