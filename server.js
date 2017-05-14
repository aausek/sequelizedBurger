//Dependencies & requires routes to enable server access
var express = require("express"),
    bodyParser = require("body-parser"),
    db = require("./models");

//Sets up Express App
var PORT = process.env.PORT || 3000;
var app = express();

//Static directory
app.use(express.static("./public"));

//Sets up data parsing capability for Express App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

//Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({
    force: true
}).then(function() {
    app.listen(PORT, function() {
        console.log("Listening on Port: " + PORT);
    });
});