const express = require("express");
const jwt = require("jwt-simple");
const router = express.Router();
const User = require("../models/user");
const config = require("../config");

router.post("/signup", (req, res, next) => {
  const { username, password, nickname, email, tel, gm } = req.body;

  const user = new User({
    username,
    nickname,
    email,
    tel,
    gm
  });

  User.register(user, password, err => {
    if (err) {
      return next(err);
    }
    res.json({ success: true });
  });
});

const authenticate = User.authenticate();
router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    authenticate(username, password, (err, user, failed) => {
      if (err) {
        return next(err);
      }
      if (failed) {
        return res.status(401).json(failed.message);
      }
      if (user) {
        const payload = {
          id: user.id
        };
        const token = jwt.encode(payload, config.jwtSecret);
        res.json({ token });
      }
    });
  } else {
    res.sendStatus(401).json("Username or Password missing");
  }
});

module.exports = router;
