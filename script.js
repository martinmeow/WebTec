import Raum from "./js/raum.js";
import Buchung from "./js/buchung.js";

function getViewportWidth() {
	return window.innerWidth || document.documentElement.clientWidth;
}

console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel.`);

let raum1 = new Raum("A.E.01", "Hörsaal", "EF 42", 100, ["1 Whiteboard"]);
let raum2 = new Raum("A.E.02", "Pausenraum", "EF 42", 10, ["1 Kühlschrank"]);

raum1.addBuchung(
	new Buchung(
		"Vorlesung1",
		new Date(2020, 1, 14, 12),
		new Date(2020, 1, 14, 15),
		"Prof. Dr. Martin",
		100,
		"WebTec Vorlesung JavaScript"
	)
);

raum1.addBuchung(
	new Buchung(
		"Vorlesung2",
		new Date(2020, 2, 14, 12),
		new Date(2020, 2, 14, 15),
		"Prof. Dr. Maksim",
		100,
		"Meme Vorlesung ok Boomer"
	)
);

raum1.addBuchung(
	new Buchung(
		"Vorlesung3",
		new Date(2020, 1, 14, 16),
		new Date(2020, 1, 14, 18),
		"Prof. Dr. Med. DenRasen",
		100,
		"WebTec Vorlesung"
	)
);
console.log(raum1, raum2);

raum1.buchungen.forEach(console.log);
