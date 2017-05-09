//Import express and burger object
var express = require("express"),
	burger = require("../models/burger.js"),

	//Create app router
	router = express.Router();

router.get("/", function (req, res) {
	res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
	burger.all(function (data) {
		res.render("index", {burger_data: data});
	});
});

router.post("/burgers/create", function (req, res) {
	burger.create(req.body.burger_name, function (data) {
		console.log(data);
		res.redirect("/burgers");
	});
});

router.put("/burgers/update/:id", function (req, res) {
	var condition = "id = " + req.params.id;

	 console.log("condition", condition);

	 burger.update({
	 	"devoured": req.body.devoured
	 }, condition, function (data) {
	 	res.redirect("/burgers");
	 });
});

//Export router for server.js use
module.exports = router;






