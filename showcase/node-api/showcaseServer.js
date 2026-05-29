const express = require("express");
const app = express();

app.use(express.static("../client-side"));

app.use(express.text());

app.post("/ParseInterval", (req, res) => {
    console.log("GOT IT!");
    console.log(req.body);
    res.send("Togetha");
    res.end();
});

app.listen(3000);