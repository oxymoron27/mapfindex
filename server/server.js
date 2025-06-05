const express = require("express");
const app = express();
const cors = require('cors');
const port = 4000;
const list = [];
const returnlist = [{
    titleLocation: 'asdf',
    descriptionLocation: 'asdfas',
    lat: 51.505750806437874,
    lng: -0.05578994750976563
},
{
    titleLocation: 'asdf',
    descriptionLocation: 'asdf',
    lat: 51.50820824957313,
    lng: -0.05098342895507813
}]

app.use(cors());
app.use(express.json());

app.post("/streetart", (req, res) => {
    list.push(req.body);
    console.log(list[0]);
    res.json({ message: 'Saved to Backend' });

});


app.get("/streetart", (req, res) => {
    res.json(returnlist);
    console.log(returnlist);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});