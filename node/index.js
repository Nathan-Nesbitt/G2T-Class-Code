// Import the express library //
const express = require("express");

// Creates an express application //
const app = express();

// Set a port number //
const port = 3000;

// Set an endpoint //
app.get("/", (request, response) => {
    response.send("HELLO WORLD!");
})

app.get("/tea", (request, response) => {
    response.send("🍵🍵🍵🍵🍵🍵🍵🍵");
})

// Start the server //
app.listen(port, () => {console.log("RUNNING")});