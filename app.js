/* eslint-disable no-undef */
require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.APP_PORT ?? 8001;

const welcome = (req, res) => {
    res.send("Welcome Users");
};

app.get("/", welcome);

const userHandlers = require("./userHandlers")

app.get("/api/users", userHandlers.getUsers)
app.get("/api/users/:id", userHandlers.getUserById)

app.listen(port, (err) =>{
    if(err){
        console.error("Something bad happened");
    } else {
        console.log(`Servcer is listening on ${port}`);
    }
});
