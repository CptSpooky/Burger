// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {

  // get all burgers
  selectAll: function(cb){
    let queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, res) {
      if (err) {throw err;}
      cb(res);
      
    });
  },

  // insert a burger
  insertOne: function(burger, cb){
    let queryString = "INSERT INTO burgers_db.burgers (burger_name) VALUES (?)";
    connection.query(queryString, [burger], function(err, res) {
      if (err) {throw err;}

      cb(res);
    });

  },

  // devour a burger
  updateOne: function(id, cb){
    let queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(queryString, [id], function(err, res) {
      if (err) {throw err;}

      cb(res);
    });
  }

};

// Export the orm object for the model
module.exports = orm;