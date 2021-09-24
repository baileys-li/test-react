export default function getData(url) {
	return fetch(url).then((response) => {
		return response.json();
	});
}
