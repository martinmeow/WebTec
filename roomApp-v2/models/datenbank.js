const Raum = require("./raum.js");
const Buchung = require("./buchung.js");

const raume = [
	new Raum("A.E.01", "Hörsaal1", "EF42", 100, ["1 Beamer", "1 Whiteboard"]),
	new Raum("A.E.02", "Hörsaal2", "EF43", 200, ["2 Beamer"]),
	new Raum("A.E.03", "Hörsaal3", "EF44", 300, ["3 Beamer", "1 Whiteboard", "3 Tische"]),
	new Raum("A.E.04", "Hörsaal4", "EF45", 400, ["4 Beamer", "1 Whiteboard", "3 Stühle"]),
];

raume[0].addBuchung(
	new Buchung(
		"Vorlesung1",
		new Date(2020, 1, 14, 12),
		new Date(2020, 1, 14, 15),
		"Prof. Dr. Martin",
		100,
		"WebTec Vorlesung JavaScript"
	)
);

raume[0].addBuchung(
	new Buchung(
		"Vorlesung2",
		new Date(2020, 2, 14, 12),
		new Date(2020, 2, 14, 15),
		"Prof. Dr. Maksim",
		100,
		"Meme Vorlesung ok Boomer"
	)
);

raume[0].addBuchung(
	new Buchung(
		"Vorlesung3",
		new Date(2020, 1, 14, 16),
		new Date(2020, 1, 14, 18),
		"Prof. Dr. Med. DenRasen",
		100,
		"WebTec Vorlesung"
	)
);

module.exports = { raume };
