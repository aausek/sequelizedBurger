//Dependencies & requires routes to enable server access
var express = require("express"),
    bodyParser = require("body-parser"),
    db = require("./models"),
    method = require("method-override"),
    exphbs = require("express-handlebars"),
    handle = require("handlebars");

//Sets up Express App
var PORT = process.env.PORT || 3000;
var app = express();

//Static directory
app.use(express.static("./public"));

// enable method override
app.use(method("_method"));

//Sets up data parsing capability for Express App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

//Setting handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({
    force: false
}).then(function() {
    app.listen(PORT, function() {
        console.log("Listening on Port: " + PORT);
    });
});