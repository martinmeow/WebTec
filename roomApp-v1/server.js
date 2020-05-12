const http = require("http");
const fs = require("fs");
const Raum = require("./module/raum.js");

const server = http.createServer(function(request, response) {
	if (request.method == "GET") {
		let path;
		switch (request.url) {
			case "/":
				path = "/dashboard.html";
				break;
			case "/liste.html":
				path = null;
				response.write(liste());
				break;
			default:
				path = request.url;
		}
		if (path !== null) {
			// Content type http header
			if (request.url.startsWith("/css/")) response.setHeader("Content-Type", "text/css");
			if (request.url.startsWith("/js/")) response.setHeader("Content-Type", "text/javascript");

			try {
				response.write(fs.readFileSync("public" + path));
			} catch (error) {
				response.statusCode = 404;
				response.statusMessage = "Not Found";
				response.write(fs.readFileSync("public/error/404.html"));
			}
		}
		response.end();
	}
});

server.listen(8020);

/** @returns {string} */
function liste() {
	return `<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>Raumliste</title>
		<link rel="stylesheet" href="/css/style.css" />
		<link rel="stylesheet" href="/css/flexbox.css" />
	</head>

	<body>
		<header>
			<a href="/dashboard.html">
				<img src=" /img/logo.png" alt="logo" height="50" width="50" />
				<h1>Raumbuchungs Web-App</h1>
			</a>
		</header>

		<nav class="clearFloat">
			<ul>
				<li><a href="/liste.html">Raumliste</a></li>
				<li><a href="/raum.html">Raumdetails</a></li>
				<li><a href="/buchung.html">Buchungsdetails</a></li>
				<li><a href="/seminar.html">Seminar anlegen</a></li>
			</ul>
		</nav>

		<div class="flexInner">
			<main>
				<article>
					<form method="GET" action="https://labs.inf.fh-dortmund.de/roomReservationService/testRoomSearch.php">
						<span class="required">
							<label for="raumnummer">Raumnummer: </label>
							<input
								type="text"
								list="raumliste"
								name="roomno"
								id="raumnummer"
								placeholder="Raumnummer"
								pattern="[A-Z]\.[E0-3]\.[0-9]{2}"
								maxlength="6"
								autofocus
								required
							/>
						</span>
						<datalist id="raumliste">
							<option value="A.E.01"> </option>
							<option value="A.E.02"> </option>
							<option value="A.E.03"> </option>
						</datalist>
						<input type="submit" value="Finden" />
					</form>
					<h2>Raumliste</h2>
					<ul>
						${createRaumList()}
					</ul>
				</article>
			</main>

			<aside>
				<h2>Meldungen</h2>
				<ul>
					<li><time datetime="2019-10-06">06.10.2019:</time> Stühle kaputt</li>
					<li><time datetime="2019-10-10">10.10.2019:</time> Beamer kaputt</li>
					<li><time datetime="2019-10-16">16.10.2019:</time> Fenster kaputt</li>
				</ul>
			</aside>
		</div>

		<footer>
			© 2019 Maksim Zimmermann & Martin Zacharias 🕴
		</footer>
	</body>
</html>
`;
}

function createRaumList() {
	let output = "";
	for (const raum of Raum.raume) {
		output += raum.li();
	}
	return output;
}
