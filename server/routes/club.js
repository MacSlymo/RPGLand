const express = require("express");
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");

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

router.post("/", ensureLoggedIn(), (req, res) => {
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

  const club = new Club({
    name,
    address: {
      addressLineOne,
      addressLineTwo,
      city,
      state,
      postcode,
      country
    },
    coordinates: {
      latitude,
      longitude
    },
    email,
    tel
  });
  club.save(function(err, newClub) {
    if (err) {
      res.json({ message: "a problem occured during the registration" });
      console.log(err);
    } else {
      res.json(newClub);
      console.log(newClub);
    }
  });
});

module.exports = router;
