// Import express //
const express = require("express");

// Create an express app //
const app = express()

// Import the EJS Library into express //
app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// people array //
var people = ["Nathan"];

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/get_all_people", (req, res) => {
    res.send(people)
})

app.post("/create_person", (req, res) => {
    people.push(req.body.person);
    console.log(people)
    res.send("success!")
})

app.listen(3006)