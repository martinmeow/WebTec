const plus = createKachel("+", "#");
plus.addEventListener("click", addKachel);
document.querySelector("main").append(plus);

/**
 * Erstellt eine Dashboard Kachel
 * @param {string} name
 * @param {string} url
 * @returns {HTMLAnchorElement} Dashboard Kachel
 */
function createKachel(name, url) {
	const a = document.createElement("a");
	a.href = url;

	const div = document.createElement("div");
	div.textContent = name;

	a.append(div);
	return a;
}

/**
 * Callback für plus kachel
 * @param {MouseEvent} event
 * @this {HTMLAnchorElement} plus kachel
 */
function addKachel(event) {
	event.preventDefault();
	const name = prompt("Name");
	// stop if canceled
	if (!name) return;
	const url = prompt("URL");
	if (!url) return;

	const kachel = createKachel(name, url);
	this.before(kachel);
}
