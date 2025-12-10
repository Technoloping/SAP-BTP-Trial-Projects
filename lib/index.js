import express from "express";

var app = express();
var DEFAULTPORT = 3003;
var port = process.env.PORT || DEFAULTPORT;

app.get('/',
    (req, res) => {
        res.send("你好");
    }
);

app.listen(port,
    () => {
        console.log("App listens on port: " + port);
    }
);
