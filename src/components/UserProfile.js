import React from "react";
import { useSelector } from "react-redux";
import * as S from "./User.styles";

const UserProfile = () => {
	const user = useSelector((state) => state.user);

	const UserBio = () => {
		return (
			<S.Bio aria-label="User details">
				<S.Avatar src={user.avatar_url} alt="" className="user-profile__pic" />
				<S.TextData>
					<h3>
						<a href={user?.html_url}>{user?.name || user?.login}</a>
					</h3>
					<p>
						<a href={`mailto:${user?.email}`}>{user?.email}</a>
					</p>
					<p>{user?.bio}</p>
				</S.TextData>
			</S.Bio>
		);
	};

	return (
		<>
			<h2>User details</h2>

			<div className="card">{user.message !== "Not Found" ? <UserBio /> : <p>User not found</p>}</div>
		</>
	);
};

export default UserProfile;
