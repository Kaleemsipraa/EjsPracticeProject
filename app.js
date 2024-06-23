const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/charConter", (req, res) => {
	res.render("char");
});

app.get("/wordCounetr", (req, res) => {
	res.render("word");
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
