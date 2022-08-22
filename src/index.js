import "./style.css";
import homeLoad from "./home-load.js";

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
    _unorderedList.append(
        _listItemHome,
        _listItemMenu,
        _listItemContact
    );
    _nav.appendChild(_unorderedList);
    _header.appendChild(_nav);
    const _contentElement = document.createElement("div");
    _contentElement.id = "content";
    homeLoad(_contentElement);
    document.body.append(
        _header,
        _contentElement
    );
})();
