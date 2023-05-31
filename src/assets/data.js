const data = [
	{
		id: 1,
		image: "../assets/images/1.jpg",
		category: "nature",
		title: "nature1",
		orientation: "landscape",
	},
	{
		id: 2,
		image: "../assets/images/2.jpg",
		category: "nature",
		title: "nature2",
		orientation: "landscape",
	},
	{
		id: 3,
		image: "../assets/images/3.jpg",
		category: "people",
		title: "people1",
		orientation: "landscape",
	},
	{
		id: 4,
		image: "../assets/images/camera1.jpg",
		category: "camera",
		title: "camera1",
		orientation: "square",
	},
	{
		id: 5,
		image: "../assets/images/camera2.jpg",
		category: "camera",
		title: "camera2",
		orientation: "square",
	},
	{
		id: 6,
		image: "../assets/images/camera3.jpg",
		category: "camera",
		title: "camera3",
		orientation: "square",
	},
	{
		id: 7,
		image: "../assets/images/headphone1.jpg",
		category: "headphone",
		title: "headphone1",
		orientation: "square",
	},
	{
		id: 8,
		image: "../assets/images/headphone2.jpg",
		category: "headphone",
		title: "headphone3",
		orientation: "square",
	},
	{
		id: 9,
		image: "../assets/images/headphone3.jpg",
		category: "headphone",
		title: "headphone3",
		orientation: "square",
	},
	{
		id: 10,
		image: "../assets/images/headphone4.jpg",
		category: "headphone",
		title: "headphone4",
		orientation: "square",
	},
	{
		id: 11,
		image: "../assets/images/mobile1.jpg",
		category: "mobile",
		title: "mobile1",
		orientation: "square",
	},
	{
		id: 12,
		image: "../assets/images/mobile2.jpg",
		category: "mobile",
		title: "mobile2",
		orientation: "square",
	},
	{
		id: 13,
		image: "../assets/images/mobile3.jpg",
		category: "mobile",
		title: "mobile3",
		orientation: "square",
	},
	{
		id: 14,
		image: "../assets/images/mobile4.jpg",
		category: "mobile",
		title: "mobile4",
		orientation: "square",
	},
	{
		id: 15,
		image: "../assets/images/mobile5.jpg",
		category: "mobile",
		title: "mobile5",
		orientation: "square",
	},
	{
		id: 16,
		image: "../assets/images/shoe1.jpg",
		category: "shoes",
		title: "shoes1",
		orientation: "square",
	},
	{
		id: 17,
		image: "../assets/images/shoe2.jpg",
		category: "shoes",
		title: "shoes2",
		orientation: "square",
	},
	{
		id: 18,
		image: "../assets/images/shoe3.jpg",
		category: "shoes",
		title: "shoes3",
		orientation: "square",
	},
	{
		id: 19,
		image: "../assets/images/shoe4.jpg",
		category: "shoes",
		title: "shoes4",
		orientation: "square",
	},
	{
		id: 20,
		image: "../assets/images/watch1.jpg",
		category: "watch",
		title: "watch1",
		orientation: "square",
	},
	{
		id: 21,
		image: "../assets/images/watch2.jpg",
		category: "watch",
		title: "watch2",
		orientation: "square",
	},
	{
		id: 22,
		image: "../assets/images/watch3.jpg",
		category: "watch",
		title: "watch3",
		orientation: "square",
	},
	{
		id: 23,
		image: "../assets/images/watch4.jpg",
		category: "watch",
		title: "watch4",
		orientation: "square",
	},
];

const mainContent = document.getElementById("product");
data.slice(3).map((item) => {
	const itemBox = document.createElement("div");
	const image = new Image();
	image.src = item.image;
	image.classList.add("shadow", "rounded", "images");
	itemBox.classList.add("itemBox");
	itemBox.setAttribute("data-item", `${item.category}`);
	itemBox.appendChild(image);
	mainContent.appendChild(itemBox);
});

let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for (let i = 0; i < list.length; i++) {
	list[i].addEventListener("click", function () {
		for (let j = 0; j < list.length; j++) {
			list[j].classList.remove("active");
		}
		this.classList.add("active");

		let dataFilter = this.getAttribute("data-filter");

		for (let k = 0; k < itemBox.length; k++) {
			itemBox[k].classList.remove("active");
			itemBox[k].classList.add("d-none");

			if (
				itemBox[k].getAttribute("data-item") === dataFilter ||
				dataFilter === "all"
			) {
				itemBox[k].classList.remove("d-none");
				itemBox[k].classList.add("active");
			}
		}
	});
}
