const express = require("express");
const router = express.Router();
const datenbank = require("../models/datenbank.js");

const raume = datenbank.raume;

router.use("/liste", function(req, res, next) {
	res.render("liste", { raume: raume });
});

router.use("/raum", function(req, res, next) {
	res.render("raum", { raum: raume[0] });
});

router.use("/buchung", function(req, res, next) {
	res.render("buchung", { raume: raume });
});

router.use("/seminar", function(req, res, next) {
	res.render("seminar", { raume: raume });
});

router.get("/", function(req, res, next) {
	res.render("dashboard", { raume: raume });
});

module.exports = router;
