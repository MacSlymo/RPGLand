const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb://localhost/jdrland");
const passport = require("passport");
const User = require("./models/user");
const Club = require("./models/club");
const config = require("./config");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");

const index = require("./routes/index");
const authRoutes = require("./routes/auth");
// const clubRoutes = require("./routes/club");

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:8080" }));

passport.initialize();
const strategy = new Strategy(
  {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (payload, done) => {
    User.findById(payload.id).then(user => {
      if (user) {
        done(null, user);
      } else {
        done(new Error("User not found"));
      }
    });
  }
);
// tell pasport to use it
passport.use(strategy);

app.use("/api", (req, res, next) => {
  const authenticate = passport.authenticate(
    "jwt",
    config.jwtSession,
    (err, user, fail) => {
      req.user = user;
      next(err);
    }
  );
  authenticate(req, res, next);
});

//For debbug purpose
app.get("/api/me", (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({
      message: "You're not connected"
    });
  }
});

app.use("/", index);
app.use("/api", authRoutes);
// app.use("/api", clubRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  console.log(err);
  res.status(err.status || 500);
  res.json("error");
});

module.exports = app;
