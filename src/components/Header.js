import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./Header.styles";

const Header = () => {
	return (
		<S.Header>
			<NavLink to="/">
				<img src="/logo.png" alt="Github Profile Search" />
			</NavLink>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/history">History</NavLink>
					</li>
				</ul>
			</nav>
		</S.Header>
	);
};

export default Header;
