// Import the express library //
const express = require("express");

// Creates an express application //
const app = express();

// Import the EJS Library into express //
app.set("view engine", "ejs");

// Handle Post Request Body Data //
app.use(express.urlencoded())

// Set a port number //
const port = 3001;

// Set an endpoint //
app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/add_person", (req, res) => {
    console.log(req.body);
    res.redirect("/")
})

// Start the app //
app.listen(port)