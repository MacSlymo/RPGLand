const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/jdrland");

const Club = require("../models/club");

router.get("/", (req, res, next) => {
  res.json("Home");
});

router.get("/api/clubs/", (req, res, next) => {
  Club.find(req.params, function(err, club) {
    if (err) res.json("club not found");
    else res.json(club);
  });
});

router.get("/api/clubs/:id", (req, res, next) => {
  Club.findById(req.params.id, function(err, epic) {
    if (err) res.json("club not found");
    else res.json(club);
  });
});

router.post("/api/clubs/", (req, res) => {
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
