const fetchAPIGithub = async () => {
	const response = await fetch("https://api.github.com/users/aZ4ziL/repos", {
		headers: {
			Authorization: `token ${process.env.GITHUB_TOKEN}`
		},
	})

	const data = await response.json();

	return data
}

export default fetchAPIGithub;