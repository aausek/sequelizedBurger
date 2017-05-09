//Dependencies & requiring routes to enable server access
var express = require("express"),
	exphbs = require("express-handlebars"),
	methodOver = require("method-override"),
	bodyParser = require("body-parser"),
	routes = require("./controllers/burgers_controller.js");

var PORT = process.env.PORT ||  3000;

var app = express();

// Serve static content for the app from the 
// "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false}));

// Override with POST having ?_method=DELETE
app.use(methodOver("_method"));

//Setting handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Give server acess to routes
app.use("/", routes);

//Listening to port
app.listen(PORT);