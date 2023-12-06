const User = require("../models/user.model");
const ROLES = ["user", "admin", "moderator"];

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({ userName: req.body.username })
    .then((user) => {
      if (user) {
        console.log('user----------------')
        console.log('user----------------')
        console.log(user)
        return res.status(400).send({ message: "Failed! Username is already in use!" });
      }

      // Check if the email is already in use
      return User.findOne({ email: req.body.email });
    })
    .then((userByEmail) => {
      if (userByEmail) {
        return res.status(400).send({ message: "Failed! Email is already in use!" });
      }

      // If both username and email are unique, proceed to the next middleware
      next();
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;