const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const User = require("../models/user.model");

verifyToken = (req, res, next) => {
  let token = req.session.token;

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      if (user.roles.includes("admin")) {
        next();
        return;
      } else {
        res.status(403).send({ message: "Require Admin Role!" });
        return;
      }
    } else {
      res.status(404).send({ message: "User not found!" });
      return;
    }
  });
};

isModerator = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      if (user.roles.includes("moderator")) {
        next();
        return;
      } else {
        res.status(403).send({ message: "Require Moderator Role!" });
        return;
      }
    } else {
      res.status(404).send({ message: "User not found!" });
      return;
    }
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator,
};
module.exports = authJwt;