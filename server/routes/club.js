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
  const {
    name,
    addressLineOne,
    addressLineTwo,
    city,
    state,
    postcode,
    country,
    latitude,
    longitude,
    email,
    tel
  } = req.body;

  const user = new User({
    name,
    addressLineOne,
    addressLineTwo,
    city,
    state,
    postcode,
    country,
    latitude,
    longitude,
    email,
    tel
  });
  user.save(function(err) {
    if (err) {
      res.json({ message: "a problem occured during the registration" });
    } else {
      res.json({ success: true });
    }
  });
});

module.exports = router;
