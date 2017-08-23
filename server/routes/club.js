const express = require("express");
const router = express.Router();

const Club = require("../models/club");

router.get("/", (req, res, next) => {
  Club.find(req.params, function(err, club) {
    if (err) res.json("club not found");
    else res.json(club);
  });
});

router.get("/:id", (req, res, next) => {
  Club.findById(req.params.id, function(err, club) {
    if (err) res.json("club not found");
    else res.json(club);
  });
});

router.post("/", (req, res) => {
  let myClub = new Club({ text: req.body.text });
  myClub.save(function(err) {
    if (err) {
      res.json({ message: "a problem occured during the registration" });
    } else {
      res.json({ text: req.body });
    }
  });
});

module.exports = router;
