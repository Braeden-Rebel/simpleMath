const express = require("express");
const app = express();

app.use(express.static("../client-side"));

app.use(express.text());

app.post("/ParseInterval", (req, res) => {
    console.log("GOT IT!");
    console.log(req.body);
    var validJSON = {valid: true}
    res.send(JSON.stringify(validJSON));
    res.end();
});

app.listen(3000);