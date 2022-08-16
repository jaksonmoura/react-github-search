const API_URL = "https://api.github.com";
const API_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const Api = {
	fetchUser: async (username) => {
		const response = fetch(`${API_URL}/users/${username}`, {
			method: "GET",
			headers: new Headers({
				"Authorization": `token ${API_TOKEN}`,
				"Content-type": "application/json",
			}),
		}).then((data) => data.json());
		return response;
	},
	fetchUserRepos: async (username) => {
		const response = fetch(`${API_URL}/users/${username}/repos`, {
			method: "GET",
			headers: new Headers({
				"Authorization": `token ${API_TOKEN}`,
				"Content-type": "application/json",
			}),
		}).then((data) => data.json());
		return response;
	},
	fetchUserWithRepos: async (username) => {
		const user = await fetch(`${API_URL}/users/${username}`, {
			method: "GET",
			headers: new Headers({
				"Authorization": `token ${API_TOKEN}`,
				"Content-type": "application/json",
			}),
		}).then((data) => data.json());

		const repos = await fetch(`${API_URL}/users/${username}/repos`, {
			method: "GET",
			headers: new Headers({
				"Authorization": `token ${API_TOKEN}`,
				"Content-type": "application/json",
			}),
		}).then((data) => data.json());
		return { ...user, repos: repos || [] };
	},
};

export default Api;
