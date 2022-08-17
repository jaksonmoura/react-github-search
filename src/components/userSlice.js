import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	login: "jaksonmoura",
	avatar_url: "https://avatars.githubusercontent.com/u/612879?v=4",
	html_url: "https://github.com/jaksonmoura",
	repos_url: "https://api.github.com/users/jaksonmoura/repos",
	name: "Jakson Moura",
	location: "Tocantins - Brazil",
	email: "jrochelly@gmail.com",
	bio: "Front end developer",
	public_repos: 45,
	public_gists: 10,
	followers: 6,
	following: 8,
	repos: [
		{
			id: 525511950,
			node_id: "R_kgDOH1KtDg",
			name: "react-github-search",
			full_name: "jaksonmoura/react-github-search",
			private: false,
			owner: {
				login: "jaksonmoura",
				id: 612879,
				node_id: "MDQ6VXNlcjYxMjg3OQ==",
				avatar_url: "https://avatars.githubusercontent.com/u/612879?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/jaksonmoura",
				html_url: "https://github.com/jaksonmoura",
				followers_url: "https://api.github.com/users/jaksonmoura/followers",
				following_url: "https://api.github.com/users/jaksonmoura/following{/other_user}",
				gists_url: "https://api.github.com/users/jaksonmoura/gists{/gist_id}",
				starred_url: "https://api.github.com/users/jaksonmoura/starred{/owner}{/repo}",
				subscriptions_url: "https://api.github.com/users/jaksonmoura/subscriptions",
				organizations_url: "https://api.github.com/users/jaksonmoura/orgs",
				repos_url: "https://api.github.com/users/jaksonmoura/repos",
				events_url: "https://api.github.com/users/jaksonmoura/events{/privacy}",
				received_events_url: "https://api.github.com/users/jaksonmoura/received_events",
				type: "User",
				site_admin: false,
			},
			html_url: "https://github.com/jaksonmoura/react-github-search",
			description: "A github search in react",
			fork: false,
			url: "https://api.github.com/repos/jaksonmoura/react-github-search",
			forks_url: "https://api.github.com/repos/jaksonmoura/react-github-search/forks",
			keys_url: "https://api.github.com/repos/jaksonmoura/react-github-search/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/jaksonmoura/react-github-search/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/jaksonmoura/react-github-search/teams",
			hooks_url: "https://api.github.com/repos/jaksonmoura/react-github-search/hooks",
			issue_events_url: "https://api.github.com/repos/jaksonmoura/react-github-search/issues/events{/number}",
			events_url: "https://api.github.com/repos/jaksonmoura/react-github-search/events",
			assignees_url: "https://api.github.com/repos/jaksonmoura/react-github-search/assignees{/user}",
			branches_url: "https://api.github.com/repos/jaksonmoura/react-github-search/branches{/branch}",
			tags_url: "https://api.github.com/repos/jaksonmoura/react-github-search/tags",
			blobs_url: "https://api.github.com/repos/jaksonmoura/react-github-search/git/blobs{/sha}",
			git_tags_url: "https://api.github.com/repos/jaksonmoura/react-github-search/git/tags{/sha}",
			git_refs_url: "https://api.github.com/repos/jaksonmoura/react-github-search/git/refs{/sha}",
			trees_url: "https://api.github.com/repos/jaksonmoura/react-github-search/git/trees{/sha}",
			statuses_url: "https://api.github.com/repos/jaksonmoura/react-github-search/statuses/{sha}",
			languages_url: "https://api.github.com/repos/jaksonmoura/react-github-search/languages",
			stargazers_url: "https://api.github.com/repos/jaksonmoura/react-github-search/stargazers",
			contributors_url: "https://api.github.com/repos/jaksonmoura/react-github-search/contributors",
			subscribers_url: "https://api.github.com/repos/jaksonmoura/react-github-search/subscribers",
			subscription_url: "https://api.github.com/repos/jaksonmoura/react-github-search/subscription",
			commits_url: "https://api.github.com/repos/jaksonmoura/react-github-search/commits{/sha}",
			git_commits_url: "https://api.github.com/repos/jaksonmoura/react-github-search/git/commits{/sha}",
			comments_url: "https://api.github.com/repos/jaksonmoura/react-github-search/comments{/number}",
			issue_comment_url: "https://api.github.com/repos/jaksonmoura/react-github-search/issues/comments{/number}",
			contents_url: "https://api.github.com/repos/jaksonmoura/react-github-search/contents/{+path}",
			compare_url: "https://api.github.com/repos/jaksonmoura/react-github-search/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/jaksonmoura/react-github-search/merges",
			archive_url: "https://api.github.com/repos/jaksonmoura/react-github-search/{archive_format}{/ref}",
			downloads_url: "https://api.github.com/repos/jaksonmoura/react-github-search/downloads",
			issues_url: "https://api.github.com/repos/jaksonmoura/react-github-search/issues{/number}",
			pulls_url: "https://api.github.com/repos/jaksonmoura/react-github-search/pulls{/number}",
			milestones_url: "https://api.github.com/repos/jaksonmoura/react-github-search/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/jaksonmoura/react-github-search/notifications{?since,all,participating}",
			labels_url: "https://api.github.com/repos/jaksonmoura/react-github-search/labels{/name}",
			releases_url: "https://api.github.com/repos/jaksonmoura/react-github-search/releases{/id}",
			deployments_url: "https://api.github.com/repos/jaksonmoura/react-github-search/deployments",
			created_at: "2022-08-16T19:13:33Z",
			updated_at: "2022-08-16T19:24:55Z",
			pushed_at: "2022-08-16T19:27:57Z",
			git_url: "git://github.com/jaksonmoura/react-github-search.git",
			ssh_url: "git@github.com:jaksonmoura/react-github-search.git",
			clone_url: "https://github.com/jaksonmoura/react-github-search.git",
			svn_url: "https://github.com/jaksonmoura/react-github-search",
			homepage: null,
			size: 320,
			stargazers_count: 0,
			watchers_count: 0,
			language: "JavaScript",
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 0,
			watchers: 0,
			default_branch: "main",
			permissions: {
				admin: true,
				maintain: true,
				push: true,
				triage: true,
				pull: true,
			},
		},
		{
			id: 511970273,
			node_id: "R_kgDOHoQL4Q",
			name: "next-spotify",
			full_name: "jaksonmoura/next-spotify",
			private: false,
			owner: {
				login: "jaksonmoura",
				id: 612879,
				node_id: "MDQ6VXNlcjYxMjg3OQ==",
				avatar_url: "https://avatars.githubusercontent.com/u/612879?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/jaksonmoura",
				html_url: "https://github.com/jaksonmoura",
				followers_url: "https://api.github.com/users/jaksonmoura/followers",
				following_url: "https://api.github.com/users/jaksonmoura/following{/other_user}",
				gists_url: "https://api.github.com/users/jaksonmoura/gists{/gist_id}",
				starred_url: "https://api.github.com/users/jaksonmoura/starred{/owner}{/repo}",
				subscriptions_url: "https://api.github.com/users/jaksonmoura/subscriptions",
				organizations_url: "https://api.github.com/users/jaksonmoura/orgs",
				repos_url: "https://api.github.com/users/jaksonmoura/repos",
				events_url: "https://api.github.com/users/jaksonmoura/events{/privacy}",
				received_events_url: "https://api.github.com/users/jaksonmoura/received_events",
				type: "User",
				site_admin: false,
			},
			html_url: "https://github.com/jaksonmoura/next-spotify",
			description: "A next portifolio project using NextJS",
			fork: false,
			url: "https://api.github.com/repos/jaksonmoura/next-spotify",
			forks_url: "https://api.github.com/repos/jaksonmoura/next-spotify/forks",
			keys_url: "https://api.github.com/repos/jaksonmoura/next-spotify/keys{/key_id}",
			collaborators_url: "https://api.github.com/repos/jaksonmoura/next-spotify/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/jaksonmoura/next-spotify/teams",
			hooks_url: "https://api.github.com/repos/jaksonmoura/next-spotify/hooks",
			issue_events_url: "https://api.github.com/repos/jaksonmoura/next-spotify/issues/events{/number}",
			events_url: "https://api.github.com/repos/jaksonmoura/next-spotify/events",
			assignees_url: "https://api.github.com/repos/jaksonmoura/next-spotify/assignees{/user}",
			branches_url: "https://api.github.com/repos/jaksonmoura/next-spotify/branches{/branch}",
			tags_url: "https://api.github.com/repos/jaksonmoura/next-spotify/tags",
			blobs_url: "https://api.github.com/repos/jaksonmoura/next-spotify/git/blobs{/sha}",
			git_tags_url: "https://api.github.com/repos/jaksonmoura/next-spotify/git/tags{/sha}",
			git_refs_url: "https://api.github.com/repos/jaksonmoura/next-spotify/git/refs{/sha}",
			trees_url: "https://api.github.com/repos/jaksonmoura/next-spotify/git/trees{/sha}",
			statuses_url: "https://api.github.com/repos/jaksonmoura/next-spotify/statuses/{sha}",
			languages_url: "https://api.github.com/repos/jaksonmoura/next-spotify/languages",
			stargazers_url: "https://api.github.com/repos/jaksonmoura/next-spotify/stargazers",
			contributors_url: "https://api.github.com/repos/jaksonmoura/next-spotify/contributors",
			subscribers_url: "https://api.github.com/repos/jaksonmoura/next-spotify/subscribers",
			subscription_url: "https://api.github.com/repos/jaksonmoura/next-spotify/subscription",
			commits_url: "https://api.github.com/repos/jaksonmoura/next-spotify/commits{/sha}",
			git_commits_url: "https://api.github.com/repos/jaksonmoura/next-spotify/git/commits{/sha}",
			comments_url: "https://api.github.com/repos/jaksonmoura/next-spotify/comments{/number}",
			issue_comment_url: "https://api.github.com/repos/jaksonmoura/next-spotify/issues/comments{/number}",
			contents_url: "https://api.github.com/repos/jaksonmoura/next-spotify/contents/{+path}",
			compare_url: "https://api.github.com/repos/jaksonmoura/next-spotify/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/jaksonmoura/next-spotify/merges",
			archive_url: "https://api.github.com/repos/jaksonmoura/next-spotify/{archive_format}{/ref}",
			downloads_url: "https://api.github.com/repos/jaksonmoura/next-spotify/downloads",
			issues_url: "https://api.github.com/repos/jaksonmoura/next-spotify/issues{/number}",
			pulls_url: "https://api.github.com/repos/jaksonmoura/next-spotify/pulls{/number}",
			milestones_url: "https://api.github.com/repos/jaksonmoura/next-spotify/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/jaksonmoura/next-spotify/notifications{?since,all,participating}",
			labels_url: "https://api.github.com/repos/jaksonmoura/next-spotify/labels{/name}",
			releases_url: "https://api.github.com/repos/jaksonmoura/next-spotify/releases{/id}",
			deployments_url: "https://api.github.com/repos/jaksonmoura/next-spotify/deployments",
			created_at: "2022-07-08T17:10:06Z",
			updated_at: "2022-07-08T17:10:06Z",
			pushed_at: "2022-07-08T17:10:06Z",
			git_url: "git://github.com/jaksonmoura/next-spotify.git",
			ssh_url: "git@github.com:jaksonmoura/next-spotify.git",
			clone_url: "https://github.com/jaksonmoura/next-spotify.git",
			svn_url: "https://github.com/jaksonmoura/next-spotify",
			homepage: null,
			size: 0,
			stargazers_count: 0,
			watchers_count: 0,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 0,
			watchers: 0,
			default_branch: "main",
			permissions: {
				admin: true,
				maintain: true,
				push: true,
				triage: true,
				pull: true,
			},
		},
		{
			id: 499664516,
			node_id: "R_kgDOHchGhA",
			name: "responsive-carousel-js",
			full_name: "jaksonmoura/responsive-carousel-js",
			private: false,
			owner: {
				login: "jaksonmoura",
				id: 612879,
				node_id: "MDQ6VXNlcjYxMjg3OQ==",
				avatar_url: "https://avatars.githubusercontent.com/u/612879?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/jaksonmoura",
				html_url: "https://github.com/jaksonmoura",
				followers_url: "https://api.github.com/users/jaksonmoura/followers",
				following_url: "https://api.github.com/users/jaksonmoura/following{/other_user}",
				gists_url: "https://api.github.com/users/jaksonmoura/gists{/gist_id}",
				starred_url: "https://api.github.com/users/jaksonmoura/starred{/owner}{/repo}",
				subscriptions_url: "https://api.github.com/users/jaksonmoura/subscriptions",
				organizations_url: "https://api.github.com/users/jaksonmoura/orgs",
				repos_url: "https://api.github.com/users/jaksonmoura/repos",
				events_url: "https://api.github.com/users/jaksonmoura/events{/privacy}",
				received_events_url: "https://api.github.com/users/jaksonmoura/received_events",
				type: "User",
				site_admin: false,
			},
			html_url: "https://github.com/jaksonmoura/responsive-carousel-js",
			description: "This is a simple responsive carousel made for learning purposes",
			fork: false,
			url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js",
			forks_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/forks",
			keys_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/jaksonmoura/responsive-carousel-js/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/teams",
			hooks_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/hooks",
			issue_events_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/issues/events{/number}",
			events_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/events",
			assignees_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/assignees{/user}",
			branches_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/branches{/branch}",
			tags_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/tags",
			blobs_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/git/blobs{/sha}",
			git_tags_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/git/tags{/sha}",
			git_refs_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/git/refs{/sha}",
			trees_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/git/trees{/sha}",
			statuses_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/statuses/{sha}",
			languages_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/languages",
			stargazers_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/stargazers",
			contributors_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/contributors",
			subscribers_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/subscribers",
			subscription_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/subscription",
			commits_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/commits{/sha}",
			git_commits_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/git/commits{/sha}",
			comments_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/jaksonmoura/responsive-carousel-js/issues/comments{/number}",
			contents_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/contents/{+path}",
			compare_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/merges",
			archive_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/{archive_format}{/ref}",
			downloads_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/downloads",
			issues_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/issues{/number}",
			pulls_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/pulls{/number}",
			milestones_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/jaksonmoura/responsive-carousel-js/notifications{?since,all,participating}",
			labels_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/labels{/name}",
			releases_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/releases{/id}",
			deployments_url: "https://api.github.com/repos/jaksonmoura/responsive-carousel-js/deployments",
			created_at: "2022-06-03T22:10:47Z",
			updated_at: "2022-06-03T22:19:39Z",
			pushed_at: "2022-06-03T22:15:59Z",
			git_url: "git://github.com/jaksonmoura/responsive-carousel-js.git",
			ssh_url: "git@github.com:jaksonmoura/responsive-carousel-js.git",
			clone_url: "https://github.com/jaksonmoura/responsive-carousel-js.git",
			svn_url: "https://github.com/jaksonmoura/responsive-carousel-js",
			homepage: "https://jaksonmoura.github.io/responsive-carousel-js/",
			size: 4,
			stargazers_count: 0,
			watchers_count: 0,
			language: "HTML",
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: true,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 0,
			watchers: 0,
			default_branch: "main",
			permissions: {
				admin: true,
				maintain: true,
				push: true,
				triage: true,
				pull: true,
			},
		},
		{
			id: 469185650,
			node_id: "R_kgDOG_c0cg",
			name: "fake-store-react",
			full_name: "jaksonmoura/fake-store-react",
			private: false,
			owner: {
				login: "jaksonmoura",
				id: 612879,
				node_id: "MDQ6VXNlcjYxMjg3OQ==",
				avatar_url: "https://avatars.githubusercontent.com/u/612879?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/jaksonmoura",
				html_url: "https://github.com/jaksonmoura",
				followers_url: "https://api.github.com/users/jaksonmoura/followers",
				following_url: "https://api.github.com/users/jaksonmoura/following{/other_user}",
				gists_url: "https://api.github.com/users/jaksonmoura/gists{/gist_id}",
				starred_url: "https://api.github.com/users/jaksonmoura/starred{/owner}{/repo}",
				subscriptions_url: "https://api.github.com/users/jaksonmoura/subscriptions",
				organizations_url: "https://api.github.com/users/jaksonmoura/orgs",
				repos_url: "https://api.github.com/users/jaksonmoura/repos",
				events_url: "https://api.github.com/users/jaksonmoura/events{/privacy}",
				received_events_url: "https://api.github.com/users/jaksonmoura/received_events",
				type: "User",
				site_admin: false,
			},
			html_url: "https://github.com/jaksonmoura/fake-store-react",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/jaksonmoura/fake-store-react",
			forks_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/forks",
			keys_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/keys{/key_id}",
			collaborators_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/teams",
			hooks_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/hooks",
			issue_events_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/issues/events{/number}",
			events_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/events",
			assignees_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/assignees{/user}",
			branches_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/branches{/branch}",
			tags_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/tags",
			blobs_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/git/blobs{/sha}",
			git_tags_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/git/tags{/sha}",
			git_refs_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/git/refs{/sha}",
			trees_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/git/trees{/sha}",
			statuses_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/statuses/{sha}",
			languages_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/languages",
			stargazers_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/stargazers",
			contributors_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/contributors",
			subscribers_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/subscribers",
			subscription_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/subscription",
			commits_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/commits{/sha}",
			git_commits_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/git/commits{/sha}",
			comments_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/comments{/number}",
			issue_comment_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/issues/comments{/number}",
			contents_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/contents/{+path}",
			compare_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/merges",
			archive_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/{archive_format}{/ref}",
			downloads_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/downloads",
			issues_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/issues{/number}",
			pulls_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/pulls{/number}",
			milestones_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/jaksonmoura/fake-store-react/notifications{?since,all,participating}",
			labels_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/labels{/name}",
			releases_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/releases{/id}",
			deployments_url: "https://api.github.com/repos/jaksonmoura/fake-store-react/deployments",
			created_at: "2022-03-12T19:52:45Z",
			updated_at: "2022-05-06T17:08:40Z",
			pushed_at: "2022-08-14T20:22:40Z",
			git_url: "git://github.com/jaksonmoura/fake-store-react.git",
			ssh_url: "git@github.com:jaksonmoura/fake-store-react.git",
			clone_url: "https://github.com/jaksonmoura/fake-store-react.git",
			svn_url: "https://github.com/jaksonmoura/fake-store-react",
			homepage: "https://react-store-jk.netlify.app/",
			size: 822,
			stargazers_count: 0,
			watchers_count: 0,
			language: "JavaScript",
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 0,
			watchers: 0,
			default_branch: "main",
			permissions: {
				admin: true,
				maintain: true,
				push: true,
				triage: true,
				pull: true,
			},
		},
	],
};

export const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		setCurrentUser: (state, action) => {
			return { ...action.payload };
		},
		setUserRepos: (state, action) => {
			return { ...state, repos: action.payload };
		},
	},
});

export const { setCurrentUser, setUserRepos } = userSlice.actions;

export default userSlice.reducer;
