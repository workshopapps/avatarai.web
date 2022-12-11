

export default async function fetchUser() {
	await axios
		.get(`${BaseUrl}/user/${user.email}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((response) => {
			console.log(response, 'user');
		})
		.catch((e) => {
			const err = e?.response?.data?.detail;
			console.log(err);
		});
}
