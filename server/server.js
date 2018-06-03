const express = require("express")

let app = new express();

app.use("/test",function (req, res) {
    res.json({
        name: "aaa",
        age: 23
    });
})


module.exports = app;