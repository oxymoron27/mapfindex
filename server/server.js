const express = require("express");
const { Client } = require("pg");

const app = express();
const cors = require('cors');
const port = 4000;
const list = [];


app.use(cors());
app.use(express.json());

app.post("/streetart", (req, res) => {
    list.push(req.body);
    res.status(200).send("Sucessful!");
});


app.get("/streetart", (req, res) => {
    res.json(list);
    console.log(list);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});