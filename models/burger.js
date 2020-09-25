const orm = require("../config/orm.js");

const Burger = {
  // get all burgers
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // insert burger
  insertOne: function(burger, cb) {
    orm.insertOne(burger, function(res) {
      cb(res);
    });
  },
  // update burger
  updateOne: function(id, cb) {
    orm.updateOne([id], function(res) {
      cb(res);
    });
  }
};







// Export the orm object for the model
module.exports = Burger;