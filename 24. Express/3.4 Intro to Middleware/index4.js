import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({ extended: true }));

function bandnameGenerator (req, res, next) {
  console.log.apply(req.body);
  bandName = req.body["street"] + " " +req.body["pet"];
  next();
}

app.use(bandnameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`<h1> Your band name is ${bandName}</h1>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
