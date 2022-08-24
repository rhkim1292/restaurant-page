export default function loadPage(parent) {
	const _contentHeadline = document.createElement("h1");
	_contentHeadline.textContent = "Contact Us";

	const _contactEntry = document.createElement("div");

	_contactEntry.id = "contactEntry1";
	_contactEntry.innerHTML = "<h3>First Foodify Restaurant</h3>" +
		"<p>Randy H Kim<br>213-101-1337<br>randy@foodify.biz</p>";

	parent.append(_contentHeadline, _contactEntry);
}
