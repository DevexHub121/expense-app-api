const config = require("../config/auth.config");
const db = require("../models");
const User = db.User;
const Role = db.Role;
const jwtUtils = require("../../utils/jwt");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // const user = new User({
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: bcrypt.hashSync(req.body.password, 8),
  // });
  User.create({
    userName: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: req.body.roles
          }
        })
          .then((roles) => {
            user.setRoles(roles.map((role) => role.id))
              .then(() => {
                res.send({ message: "User was registered successfully!" });
              })
              .catch((err) => {
                res.status(500).send({ message: err.message });
              });
          })
          .catch((err) => {
            res.status(500).send({ message: err.message });
          });
      } else {
        Role.findOne({
          where: { roleName: "user" }
        })
          .then((role) => {
            user.setRoles([role.id])
              .then(() => {
                res.send({ message: "User was registered successfully!" });
              })
              .catch((err) => {
                res.status(500).send({ message: err.message });
              });
          })
          .catch((err) => {
            res.status(500).send({ message: err.message });
          });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });

  // user.save((err, user) => {
  //   if (err) {
  //     res.status(500).send({ message: err });
  //     return;
  //   }

  //   if (req.body.roles) {
  //     Role.find(
  //       {
  //         name: { $in: req.body.roles },
  //       },
  //       (err, roles) => {
  //         if (err) {
  //           res.status(500).send({ message: err });
  //           return;
  //         }

  //         user.roles = roles.map((role) => role._id);
  //         user.save((err) => {
  //           if (err) {
  //             res.status(500).send({ message: err });
  //             return;
  //           }

  //           res.send({ message: "User was registered successfully!" });
  //         });
  //       }
  //     );
  //   } else {
  //     Role.findOne({ name: "user" }, (err, role) => {
  //       if (err) {
  //         res.status(500).send({ message: err });
  //         return;
  //       }

  //       user.roles = [role._id];
  //       user.save((err) => {
  //         if (err) {
  //           res.status(500).send({ message: err });
  //           return;
  //         }

  //         res.send({ message: "User was registered successfully!" });
  //       });
  //     });
  //   }
  // });
};

exports.signin = (req, res) => {
  User.findOne({
    where: { email: req.body.username },
    include: [{ model: Role }]
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
  
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  
      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }
  
      const token = jwt.sign(
        { id: user.id },
        config.secret,
        {
          algorithm: 'HS256',
          allowInsecureKeySizes: true,
          expiresIn: 86400, // 24 hours
        }
      );
      let userData = {
        id: user.id,
        username: user.userName,
        email: user.email,
        // roles: authorities,
      }
      jwtUtils.createJwt(userData, function (token) {
        if (token) {
          res.json({
              token: token,
                id: user.id,
                username: user.userName,
                email: user.email,
                // roles: authorities,
            }
          );
          // Created Log
        }
      });
  
      // const authorities = user.roles.map((role) => `ROLE_${roleName.toUpperCase()}`);
  
      req.session.token = token;
      // res.json({
      //   id: user.id,
      //   username: user.userName,
      //   email: user.email,
      //   // roles: authorities,
      // });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
  // User.findOne({
  //   username: req.body.username,
  // })
  //   .populate("roles", "-__v")
  //   .exec((err, user) => {
  //     if (err) {
  //       res.status(500).send({ message: err });
  //       return;
  //     }

  //     if (!user) {
  //       return res.status(404).send({ message: "User Not found." });
  //     }

  //     var passwordIsValid = bcrypt.compareSync(
  //       req.body.password,
  //       user.password
  //     );

  //     if (!passwordIsValid) {
  //       return res.status(401).send({ message: "Invalid Password!" });
  //     }

  //     const token = jwt.sign({ id: user.id },
  //                             config.secret,
  //                             {
  //                               algorithm: 'HS256',
  //                               allowInsecureKeySizes: true,
  //                               expiresIn: 86400, // 24 hours
  //                             });

  //     var authorities = [];

  //     for (let i = 0; i < user.roles.length; i++) {
  //       authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
  //     }

  //     req.session.token = token;

  //     res.status(200).send({
  //       id: user._id,
  //       username: user.username,
  //       email: user.email,
  //       roles: authorities,
  //     });
  //   });
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};
