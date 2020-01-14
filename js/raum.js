import Buchung from "./buchung.js";

export default class Raum {
	nummer;
	bezeichnung;
	gebaude;
	kapazitat;
	ausstattungsmerkmale;
	buchungen = [];
	constructor(nummer, bezeichnung, gebaude, kapazitat, ausstattungsmerkmale) {
		this.nummer = nummer;
		this.bezeichnung = bezeichnung;
		this.gebaude = gebaude;
		this.kapazitat = kapazitat;
		this.ausstattungsmerkmale = ausstattungsmerkmale;
	}

	addBuchung(buchung) {
		this.buchungen.push(buchung);
		this.buchungen.sort((a, b) => {
			return b.startzeit - a.startzeit;
		});
	}
}
