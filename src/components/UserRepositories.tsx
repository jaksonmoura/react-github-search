import React from "react";
import { useAppSelector } from "../hooks";
import { UserInterface } from "../types/user";
import * as S from "./User.styles";

const UserRepositories = () => {
	const user: UserInterface = useAppSelector((state) => state.user);

	if (user.message !== "Not Found") {
		return (
			<section aria-labelledby="repositories-title">
				<h2 id="repositories-title">Repositories</h2>
				<S.Repositories>
					{user?.repos.length > 0 ? (
						user?.repos.map((r) => (
							<li key={r.id}>
								<h3>
									<a href={r.html_url}>{r.name}</a>
								</h3>
								<p>{r.description}</p>
							</li>
						))
					) : (
						<p>User has no repositories</p>
					)}
				</S.Repositories>
			</section>
		);
	} else {
		return null;
	}
};

export default UserRepositories;
