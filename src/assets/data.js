// Data
const imageData = async () => {
	try {
		let response = await fetch("https://jsonplaceholder.typicode.com/photos");
		response = await response.json();
		console.log(response);
	} catch (error) {
		console.log("Error", error);
	}
};

imageData();
