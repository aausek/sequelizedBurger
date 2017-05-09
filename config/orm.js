//Importing MySQL connection
var connection = require("../config/connection.js");

//Helper function for SQL syntax
function questMarks(num) {
	var array = [];
	for (var i = 0; i < num; i++) {
		array.push("?");
	}
	return array.toString();
}

//Helper function for SQL syntax
function objToSql(ob) {
	var array = [];
	for (var key in ob){
		if (Object.hasOwnProperty.call(ob, key)) {
			array.push(key + "=" + ob[key]);
		}
	}
	return array.toString();
}

//Object for all SQL statement functions
var orm = {
	all: function (tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	create: function (table, cols, vals, cb) {
		console.log("These are my cols & vals: ", cols, vals);
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		console.log("Vals length: ", vals.length);
		queryString += questMarks(vals.length);
		queryString += ") ";

		console.log("This is the query string: ", queryString);

		connection.query(queryString, vals, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	update: function (table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

//Exporting the orm object 
module.exports = orm;









