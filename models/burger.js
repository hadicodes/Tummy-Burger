// Imports the ORM to & makes functions to query the database 
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    //Inserts a burger
    create: function(value, cb) {
        orm.insertOne("burgers", "burger_name", value, function(res) {
            cb(res);
        });
    },
    //Updates devoured boolean of burger
    updateDevoured: function(idValue, cb) {
        orm.updateOne("burgers", "devoured", true, "id", idValue, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;
