import styled from "styled-components";

export const FormWrapper = styled.section`
	padding: 1rem;
	border: 1px solid var(--borderColor);
	border-radius: var(--borderRadius);
	width: 100%;
	background: #f6f8fa;

	form {
		display: grid;
		grid-template-columns: auto 80px;
		width: 100%;
		gap: 0.5rem;

		.input-field {
			width: 100%;
			position: relative;
		}

		button {
			grid-column: 2/3;
			grid-row: 1/2;
		}
		.error-msg {
			grid-column: 1/3;
			grid-row: 2/3;
			width: 100%;
			color: #a31e1e;
			font-size: 14px;
		}
	}
`;
