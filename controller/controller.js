//Require models
var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.redirect("/index");
    });

    app.get("/index", function(req, res) {
        db.seqBurger.findAll({}).then(function(dbseqBurger) {
            var hbsObj = {
                burger_data: dbseqBurger
            };
            res.render("index", hbsObj);
        });
    });

    app.post("/index", function(req, res) {
        db.seqBurger.create({
            burger_name: req.body.burger_name
        }).then(function(dbseqBurger) {
            res.redirect("/index");
        }).catch(function(error) {
            res.json(error);
        });
    });

    app.put("/:id", function(req, res) {
        db.seqBurger.update({
            devoured: req.body.devoured
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.redirect("/index");
        });
    });
};