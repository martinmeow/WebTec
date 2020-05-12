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

	/**
	 * @returns {Array<HTMLLIElement>}
	 */
	getListItems() {
		const array = [];
		const nummer = document.createElement("li");
		nummer.textContent = "Nummer: " + this.nummer;
		array.push(nummer);

		const bezeichnung = document.createElement("li");
		bezeichnung.textContent = "Bezeichnung: " + this.bezeichnung;
		array.push(bezeichnung);

		const gebaude = document.createElement("li");
		gebaude.textContent = "Gebäude: " + this.gebaude;
		array.push(gebaude);

		const kapazitat = document.createElement("li");
		kapazitat.textContent = "Kapazität: " + this.kapazitat;
		array.push(kapazitat);

		const ausstattung = document.createElement("li");
		ausstattung.textContent = "Ausstattung: " + this.ausstattung;
		array.push(ausstattung);

		return array;
	}

	/**
	 * @returns {Array<HTMLTableRowElement>}
	 */
	getBuchungsTableRows() {
		const array = [];
		const dateFormat = { year: "2-digit", month: "2-digit", day: "2-digit" };
		const timeFormat = { hour: "2-digit", minute: "2-digit" };

		this.buchungen.forEach(buchung => {
			// table row
			const tr = document.createElement("tr");
			array.push(tr);

			// td mit datum
			const datumTD = document.createElement("td");
			tr.append(datumTD);
			const datumTime = document.createElement("time");
			datumTime.textContent = buchung.startzeit.toLocaleDateString("de", dateFormat);
			datumTime.dateTime = buchung.startzeit.toISOString();
			datumTD.append(datumTime);

			// td mit startzeit
			const startTD = document.createElement("td");
			tr.append(startTD);
			const startTime = document.createElement("time");
			startTime.textContent = buchung.startzeit.toLocaleTimeString("de", timeFormat) + " Uhr";
			startTime.dateTime = buchung.startzeit.toISOString();
			startTD.append(startTime);

			// td mit endzeit
			const endeTD = document.createElement("td");
			tr.append(endeTD);
			const endeTime = document.createElement("time");
			endeTime.textContent = buchung.endzeit.toLocaleTimeString("de", timeFormat) + " Uhr";
			endeTime.dateTime = buchung.endzeit.toISOString();
			endeTD.append(endeTime);

			// td mit bezeichnung
			const bezeichnungTD = document.createElement("td");
			tr.append(bezeichnungTD);
			const bezeichnungA = document.createElement("a");
			bezeichnungA.textContent = this.bezeichnung;
			bezeichnungA.href = "./buchung.html";
			bezeichnungTD.append(bezeichnungA);
		});
		return array;
	}
}
