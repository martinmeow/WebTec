const express = require("express");
const app = express();
const raum = require("./models/raum.js");
const router = require("./routes/router.js");
raum.raume = [];

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(router);

// 404
app.use(function(req, res, next) {
	res.statusCode = 404;
	res.statusMessage = "Not Found";
	res.render("404.ejs", { url: req.url });
});

app.listen(8040);
