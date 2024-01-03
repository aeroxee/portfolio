const TOKEN = "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";

const fetchAPIGithub = async () => {
	const response = await fetch("https://api.github.com/users/aZ4ziL/repos", {
		headers: {
			Authorization: `token ${TOKEN}`
		},
		next: {
			revalidate: 10
		}
	})

	const data = await response.json();

	return data
}

export default fetchAPIGithub;