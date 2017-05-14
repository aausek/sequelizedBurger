//Require mysql package
var mysql = require("mysql");

// we placed the connections in this source object
var source = {
    // localhost
    localhost: {
        port: 3306,
        host: "localhost",
        user: "root",
        password: "",
        database: "seqburgers_db"
    },

    // jawsDB
    jawsDB: {
        port: 3306,
        host: "",
        user: "",
        password: "",
        database: ""
    }
};

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(source.jawsDB);