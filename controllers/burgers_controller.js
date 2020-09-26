const express = require("express");
const router = express.Router();
const Burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required. 
// List burgers
router.get("/", (req, res) => {
  Burger.selectAll( (data) => {
    const burgerObj = {
      burgers: data
    };

    res.render("index", burgerObj);
  });
  //res.send("sdfsf");
 });

//insert burg
router.post("/api/burgers", (req, res) => {
  const burgerName = req.body.burger_name;
  Burger.insertOne(burgerName, (result) => {
 
    res.json({id: result.insertId});
  });
});

//devour burg
router.put("/api/burgers/:id", (req, res) => {
   let id = parseInt(req.params.id);
   Burger.updateOne(id, (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
  
// Export routes for server.js to use.
module.exports = router;