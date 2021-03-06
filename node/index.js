// Import the express library //
const express = require("express");

// Creates an express application //
const app = express();

// Import the EHS Library into express //
app.set('view engine', "ejs");

// Handle Post Request Body Data //
app.use(express.urlencoded())

// Set a port number //
const port = 3000;

// Set an endpoint //
app.get("/", (request, response) => {
    response.send("HELLO WORLD!");
})

app.get("/tea", (request, response) => {
    response.send("🍵");
})

app.get("/homepage", (req, res) => {
    res.send("<h1>Welcome 2 my homepage</h1>")
})

// Creates a /gator endpoint //
app.get("/gator", (req, res) => {
    res.send("🐊")
})

// Nathan's Manuscript //
app.get("/manuscript", (req, res) => {
    res.render("manuscript.ejs")
})

// EJS Example //
app.get("/favorite_foods", (req, res) => {
    var fav_foods = ["Taco", "Steak", "Pizza", "Cheese Slice", "Travis Scott Burger", "Ice", "Fruit by the Foot"];
    res.render("favfoods.ejs", {foods: fav_foods})
})

// Form Example //
app.get("/my_form", (req, res) => {
    res.render("form");
})

app.post("/my_form", (req, res) => {
    console.log(req.body.name);
    console.log(req.body.password);
    res.send("CREATED ACCOUNT");
})

// Start the server //
app.listen(port, () => {console.log("RUNNING")});