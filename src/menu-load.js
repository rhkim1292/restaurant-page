import DiscoverImg from "./discover.jpg";

export default function loadPage(parent) {
	const _contentHeadline = document.createElement("h1");
	_contentHeadline.textContent = "Menu";

	const _entreeSectionHeader = document.createElement("h2");
	_entreeSectionHeader.textContent = "Entrees";

	const _entreeItem = document.createElement("div");
	const _entreeItemTitle = document.createElement("h3");
	const _entreeItemDescription = document.createElement("p");
	const _entreeItemPrice = document.createElement("p");
	const _entreeItemImg = new Image();
	_entreeItem.id = "entreeItem1";
	_entreeItemTitle.textContent = "Discover Food";
	_entreeItemDescription.textContent =
		"Much like how your favorite music app recommends new music for you " +
		"to listen to, this entree item chooses a dish for you based on food " +
		"you've ordered with us before!";
	_entreeItemPrice.textContent = "$9";
	_entreeItemImg.src = DiscoverImg;

	_entreeItem.append(
		_entreeItemTitle,
		_entreeItemDescription,
		_entreeItemPrice,
		_entreeItemImg
	);

	parent.append(_contentHeadline, _entreeSectionHeader, _entreeItem);
}
