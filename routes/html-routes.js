// // *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************

// // Dependencies
// // =============================================================
// var path = require("path");
// var db = require("../models");

// // Routes
// // =============================================================
// module.exports = function(app) {

//     // Each of the below routes just handles the HTML page that the user gets sent to.
//     // index route loads main.html
//     app.get("/burgers", function(req, res) {
//         db.seqBurger.findAll({}).then(function(dbseqBurger) {
//             var hbsObj = {
//                 burgers: dbseqBurger,
//             };
//             res.render("index", hbsObj);
//         });
//     });
// };