const Buchung = require("./buchung.js");

class Raum {
	/**
	 * @param {string} nummer
	 * @param {string} bezeichnung
	 * @param {string} gebaude
	 * @param {number} kapazitat
	 * @param {string[]} ausstattung
	 */
	constructor(nummer, bezeichnung, gebaude, kapazitat, ausstattung) {
		/** @type {Buchung[]} */
		this.buchungen = [];
		this.nummer = nummer;
		this.bezeichnung = bezeichnung;
		this.gebaude = gebaude;
		this.kapazitat = kapazitat;
		this.ausstattung = ausstattung;
	}

	/**
	 * @param {Buchung} buchung
	 */
	addBuchung(buchung) {
		this.buchungen.push(buchung);
		this.buchungen.sort((a, b) => {
			return b.startzeit.getTime() - a.startzeit.getTime();
		});
	}

	/**
	 * @returns {string}
	 */
	li() {
		return `<li><a href="/raum.html">${this.nummer}</a> ${this.bezeichnung} ${this.gebaude}</li>`;
	}
}

const raume = [
	new Raum("A.E.01", "Hörsaal1", "EF42", 100, ["1 Beamer", "1 Whiteboard"]),
	new Raum("A.E.02", "Hörsaal2", "EF43", 200, ["2 Beamer"]),
	new Raum("A.E.03", "Hörsaal3", "EF44", 300, ["3 Beamer", "1 Whiteboard", "3 Tische"]),
	new Raum("A.E.04", "Hörsaal4", "EF45", 400, ["4 Beamer", "1 Whiteboard", "3 Stühle"]),
];

module.exports = { Raum, raume };
