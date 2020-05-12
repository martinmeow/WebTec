export default class Buchung {
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
}
