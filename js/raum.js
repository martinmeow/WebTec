import Buchung from "./buchung.js";

export default class Raum {
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
}
