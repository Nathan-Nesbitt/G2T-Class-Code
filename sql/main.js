// Import the express library //
const express = require("express");

// Import the mysql library //
const mysql = require("mysql");

// Creates an express application //
const app = express();

// Import the EJS Library into express //
app.set("view engine", "ejs");

// Handle Post Request Body Data //
app.use(express.urlencoded())

// Set a port number //
const port = 3001;

// Create a connection to the database //
const connection = mysql.createConnection({
    host: "localhost",
    user: "G2T",
    password: "password",
    database: "G2T"
})
connection.connect();


// Set an endpoint //
app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/add_person", (req, res) => {
    connection.query("INSERT INTO people(SIN, name) VALUES (?, ?)", req.body.SIN, req.body.name)
    res.redirect("/");
})

// Start the app //
app.listen(port)