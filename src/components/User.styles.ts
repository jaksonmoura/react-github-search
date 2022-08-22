import styled from "styled-components";

export const Bio = styled.section`
	display: grid;
	grid-template-columns: 80px auto;
	gap: 0.5rem;
`;

export const Avatar = styled.img`
	border-radius: 50%;
	overflow: hidden;
	background-size: cover;
	border: 5px solid #fff;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	height: 70px;
	width: 70px;

	grid-column: 1 / 2;
	grid-row: 1 / 2;
`;

export const TextData = styled.div`
	grid-column: 2/3;
	display: flex;
	gap: 2px;
	flex-direction: column;
	a,
	a:visited {
		color: #24292f;
		text-decoration: none;
	}
	h3,
	p {
		margin: 0;
	}
	p {
		font-size: 14px;
	}
`;

export const Repositories = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	list-style-type: none;
	margin: 0;
	padding: 0;

	li {
		border: 1px solid var(--borderColor);
		border-radius: var(--borderRadius);
		padding: 0.5rem;

		a {
			text-decoration: none;
			color: var(--accentColor);
		}

		h3 {
			font-size: 1rem;
			margin: 0;
		}

		p {
			color: #666;
			margin-top: 4px;
		}
	}

	@media (min-width: 600px) {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
`;
