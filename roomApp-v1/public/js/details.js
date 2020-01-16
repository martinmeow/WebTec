import Raum from "./modules/raum.js";
import Buchung from "./modules/buchung.js";

let raum1 = new Raum("A.E.01", "Hörsaal", "EF 42", 100, ["1 Whiteboard"]);

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

raum1.getListItems().forEach(li => document.querySelector("#raumDetails").append(li));

raum1.getBuchungsTableRows().forEach(tr => document.querySelector("#raumBuchungen").append(tr));
