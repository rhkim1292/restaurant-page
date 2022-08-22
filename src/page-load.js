import RestaurantImg from "./restaurant.jpg";

export default function loadPage() {
	const _contentElement = document.createElement("div");
    _contentElement.id = "content";

	const _contentHeadline = document.createElement("h1");
	_contentHeadline.textContent = "Welcome to Foodify";

	const _contentRestaurantImg = new Image();
	_contentRestaurantImg.classList.add("main-restaurant-img");
	_contentRestaurantImg.src = RestaurantImg;

	const _contentDescription = document.createElement("h3");
	_contentDescription.textContent =
		"Our restaurant has the loveliest interior design and the finest cuisine one can imagine!";

	_contentElement.append(
        _contentHeadline,
        _contentRestaurantImg,
        _contentDescription
    );

    document.body.appendChild(_contentElement);
}