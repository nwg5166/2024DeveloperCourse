import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    
    let type = "a weekday";
    let adv = "It's time to work hard!";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "It's time to relax!";    
    }

    res.render("index.ejs", {
        dayType: type, 
        advice: adv,
    });});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }); 

