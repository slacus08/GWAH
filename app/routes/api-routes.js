var db = require("../models");
var express = require('express');
var router = express.Router();



//GET route for getting all of the white cards
router.get("/whitecards", function (req, res) {
  //find all returns all of entries
  db.whiteCards.findAll({
    attributes: ['text']
  }).then(function(wcards) {

    res.json(wcards);

  });
});

router.get("/blackcard", function (req, res) {
  db.blackCard.findAll({
    attributes: ['text']
  }).then(function(bcards) {

    res.json(bcards);
    
  });
});

module.exports = router;
