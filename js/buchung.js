export default class Buchung {
	bezeichnung;
	startzeit;
	endzeit;
	bucher;
	teilnehmerAnzahl;
	beschreibung;

	constructor(bezeichnung, startzeit, endzeit, bucher, teilnehmerAnzahl, beschreibung) {
		this.bezeichnung = bezeichnung;
		this.startzeit = startzeit;
		this.endzeit = endzeit;
		this.bucher = bucher;
		this.teilnehmerAnzahl = teilnehmerAnzahl;
		this.beschreibung = beschreibung;
	}
}
