import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
	gap: 1rem;

	img {
		height: 40px;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;

		display: inline-flex;
		gap: 1rem;

		a {
			padding: 0.5rem;
			text-decoration: none;
			position: relative;

			&[aria-current="page"] {
				font-weight: 700;
				&:before {
					content: "•";
					position: absolute;
					bottom: -6px;
					left: 50%;
					transform: translateX(-50%);
				}
			}
		}
	}
`;
