var mysql = require("mysql");

// we placed the connections in this source object
var source = {
  // localhost
  localhost: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  },

  // jawsDB
  jawsDB: {
    port: 3306,
    host: "gk90usy5ik2otcvi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "yhgup3x8rs8vvzvx",
    password: "n6s87py8ihhaa5gt",
    database: "bh42uht8rzok5rmb"
  }
};

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(source.jawsDB);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;