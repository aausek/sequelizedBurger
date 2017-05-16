//Require models
var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.seqBurger.findAll({}).then(function(dbseqBurger) {
            res.redirect("/burgers");
        });
    });

    app.get("/api/burgers", function(req, res) {
        db.seqBurger.findAll({}).then(function(dbseqBurger) {
            res.json(dbseqBurger);
        });
    });

    app.post("/burgers/create", function(req, res) {
        db.seqBurger.create({
            burger_name: req.body.burger_name
        }).then(function(dbseqBurger) {
            res.redirect("/burgers");
        }).catch(function(error) {
            return res.render("error", {
                message: error.message,
                error: error
            });
        });
    });

    app.put("/burgers/update/:id", function(req, res) {
        db.seqBurger.update({
            devoured: req.body.devoured,
            burger_name: req.body.burger_name
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(dbseqBurger) {
            res.redirect("/burgers");
        });
    });
};