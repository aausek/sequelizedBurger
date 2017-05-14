//Require models
var db = require("../models");

module.exports = function(app) {

    app.get("/api/burgers", function(req, res) {
        db.seqBurger.findAll({}).then(function(dbseqBurger) {
            res.render("view");
        });
    });

    app.post("/api/burgers/create", function(req, res) {
        db.seqBurger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(dbseqBurger) {
            res.redirect("/burgers");
        });
    });

    app.put("/burgers/update/:id", function(req, res) {
        db.seqBurger.update({
            devoured: req.body.devoured,
            burger_name: req.body.burger_name
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(data) {
            res.redirect("/burgers");
        });
    });
};