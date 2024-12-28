import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "nikkog3737";
const yourPassword = "nikkog3737";
const yourAPIKey = "d451abff-e6d6-449a-a7f9-1c96ed3449e8";
const yourBearerToken = "ad1940ba-26e0-42c1-9852-c97cf9ef5be3";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
try {
  const result = await axios.get("https://secrets-api.appbrewery.com/random");
  res.render("index.ejs", { content: JSON.stringify(result.data) });
} catch (error) {
  res.status(404).send("Error", error.message)}
});

app.get("/basicAuth", async (req, res) => {
 try {
  const result = await axios.get("https://secrets-api.appbrewery.com/all?page=2", { auth: 
    {
      username: yourUsername,
      password: yourPassword,
    },
  });
  res.render("index.ejs", {content: JSON.stringify(result.data)});
} catch (error) {
  res.status.apply(404).send(error.message)
}
});

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` }
};

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "secrets/2", config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  } 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
