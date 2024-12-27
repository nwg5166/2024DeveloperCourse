import express from "express"
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>HomePage</h1>"); // This will send the file index.html to the client;
});

app.get("/about", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>About Me<h1><p>I am a web developer<p>");
});

app.get("/contact", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>Contact Me<h1><p>Phone:(123)-456-7890<p>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});