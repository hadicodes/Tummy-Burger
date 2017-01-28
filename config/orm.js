// Imports the MySQL connection in config folder
var connection = require("../config/connection.js");

//ORM object literal for the SQL queries
var orm = {
    selectAll: function(tableName, cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName, columnName, value, cb) {
        var queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(queryString, [tableName, columnName, value], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableName, columnName, value, idName, idValue, cb) {
        var queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, [tableName, columnName, value, idName, idValue], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
