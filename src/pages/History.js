import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const HistoryWrapper = styled.section`
	h1 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: inline-flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
		li {
			display: inline-flex;
			justify-content: space-between;

			a {
				text-decoration: none;
				color: var(--accentColor);
				font-weight: 700;
			}

			span {
				color: #666;
			}
		}
	}
`;

const History = () => {
	let history = useSelector((state) => state.history);

	return (
		<HistoryWrapper aria-labelledby="history-title">
			<h1 id="history-title">History</h1>
			<ul>
				{history?.length > 0 ? (
					history.map((h, i) => (
						<li className="card" key={i}>
							<a href={`/?username=${h.name}`}>{h.name}</a> <span>{h.date.toString("d")}</span>
						</li>
					))
				) : (
					<li className="card">Your search queries will appear here.</li>
				)}
			</ul>
		</HistoryWrapper>
	);
};

export default History;
