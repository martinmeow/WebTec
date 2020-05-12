class Buchung {
	/**
	 * @param {string} bezeichnung
	 * @param {Date} startzeit
	 * @param {Date} endzeit
	 * @param {string} bucher
	 * @param {number} teilnehmer
	 * @param {string} beschreibung
	 */
	constructor(bezeichnung, startzeit, endzeit, bucher, teilnehmer, beschreibung) {
		this.bezeichnung = bezeichnung;
		this.startzeit = startzeit;
		this.endzeit = endzeit;
		this.bucher = bucher;
		this.teilnehmer = teilnehmer;
		this.beschreibung = beschreibung;
	}

	get datum() {
		return `${this.startzeit.getDay()}.${this.startzeit.getMonth()}.${this.startzeit.getFullYear()}`;
	}

	get start() {
		return this.startzeit.toLocaleTimeString("de", { hour: "2-digit", minute: "2-digit" });
	}

	get ende() {
		return this.endzeit.toLocaleTimeString("de", { hour: "2-digit", minute: "2-digit" });
	}
}

module.exports = Buchung;
