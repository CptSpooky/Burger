const express = require("express");
const router = express.Router();
const Burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {

    Burger.selectAll( (data) => {
      const burgerObj = {
        burgers: data
      };
      res.render("index", burgerObj);
    });
  });
  
router.post("/", (req, res) => {
  const burgerName = req.body.burger_name;
  Burger.insertOne(burgerName, () => {
    // Send back 
    res.redirect("/");
  });
});

router.put("/:id", (req, res) => {
  let burgId = req.params.id;

  Burger.updateOne(burgId, () => {
    res.redirect("/");
  });
});
  
// Export routes for server.js to use.
module.exports = router;