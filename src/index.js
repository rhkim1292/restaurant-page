import "./style.css";
import homeLoad from "./home-load.js";
import menuLoad from "./menu-load.js";
import contactLoad from "./contact-load.js";

const loadIndexLayout = (() => {
	const _header = document.createElement("header");
	const _nav = document.createElement("nav");
	const _unorderedList = document.createElement("ul");
	const _listItemHome = document.createElement("li");
	const _homeBtn = document.createElement("div");
	_homeBtn.id = "homeBtn";
	_homeBtn.textContent = "Home";
	_listItemHome.appendChild(_homeBtn);
	const _listItemMenu = document.createElement("li");
	const _menuBtn = document.createElement("div");
	_menuBtn.id = "menuBtn";
	_menuBtn.textContent = "Menu";
	_listItemMenu.appendChild(_menuBtn);
	const _listItemContact = document.createElement("li");
	const _contactBtn = document.createElement("div");
	_contactBtn.id = "contactBtn";
	_contactBtn.textContent = "Contact";
	_listItemContact.appendChild(_contactBtn);
	_unorderedList.append(_listItemHome, _listItemMenu, _listItemContact);
	_nav.appendChild(_unorderedList);
	_header.appendChild(_nav);

	const _contentElement = document.createElement("div");
	_contentElement.id = "content";
	homeLoad(_contentElement);

	const _footer = document.createElement("footer");
	_footer.innerHTML =
		"<p>Home restaurant image by&nbsp;<a href='https://unsplash.com/@shawnanggg'>" +
		"@shawnangg</a>&nbsp;on&nbsp;<a href='https://unsplash.com'>&nbsp;" +
		"Unsplash.com</a><br>Discover Food image by&nbsp;" +
		"<a href='https://unsplash.com/@lvnatikk'>@lvnatikk</a>&nbsp;on&nbsp;" +
		"<a href='https://unsplash.com'>&nbsp;Unsplash.com</a></p>";
	document.body.append(_header, _contentElement, _footer);

	function getHomeBtn() {
		return _homeBtn;
	}

	function getMenuBtn() {
		return _menuBtn;
	}

	function getContactBtn() {
		return _contactBtn;
	}

	function getContentElement() {
		return _contentElement;
	}

	return {
		getHomeBtn,
		getMenuBtn,
		getContactBtn,
		getContentElement,
	};
})();

const eventHandler = (() => {
	const _homeBtn = loadIndexLayout.getHomeBtn();
	const _menuBtn = loadIndexLayout.getMenuBtn();
	const _contactBtn = loadIndexLayout.getContactBtn();
	const _contentElement = loadIndexLayout.getContentElement();

	_homeBtn.addEventListener("click", (e) => {
		_contentElement.innerHTML = "";
		homeLoad(_contentElement);
	});

	_menuBtn.addEventListener("click", (e) => {
		_contentElement.innerHTML = "";
		menuLoad(_contentElement);
	});

	_contactBtn.addEventListener("click", (e) => {
		_contentElement.innerHTML = "";
		contactLoad(_contentElement);
	});
})();
