const express = require("express");
const app = express();
const compression = require("compression");
const bodyParser = require("body-parser");

let domain;
if (process.env.NODE_ENV == "production") {
    domain = "https://rory-lewis.herokuapp.com:*";
} else {
    domain = "localhost:8080";
}
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("public"));

app.use(compression());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

let port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log("listening on " + port);
});
