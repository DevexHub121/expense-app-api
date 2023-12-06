const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtUtils = require('../../utils/jwt');
const config = require('../config/auth.config');

// const UserSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   userName: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   roles: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Role',
//   }],
// });

// const RoleSchema = new mongoose.Schema({
//   roleName: {
//     type: String,
//     required: true,
//   },
//   // Add other fields as needed
// });

const User = require('../models/user.model')
const Role = require('../models/role.model')

exports.signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);

    const user = await User.create({
      userName: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const newRole = new Role({
      roleName: "user",
      roleDescription: "User role with full access",
      roleTags: "user",
      isDefaultRegister: true,
      isDefaultInvite: true,
      isClientUser: false,
      isOrgUser: false,
      isOrgAdmin: true,
      createdBy: 1,
      updatedBy: null,
      deletedAt: null,
      client_assignment_permission: true,
      lead_assignment_permission: true,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    newRole.save()
  .then((result) => {
    console.log("New role added:", result);
  })
  .catch((error) => {
    console.error("Error adding role:", error);
  })

    // if (req.body.roles) {
    //   const roles = await Role.find({ roleName: { $in: req.body.roles } });
    //   user.roles = roles.map(role => role._id);
    // } else {
    //   const defaultUserRole = await Role.findOne({ roleName: 'user' });
    //   console.log('defaultUserRole----------------')
    //   console.log('defaultUserRole----------------')
    //   console.log(defaultUserRole)
    //   user.roles = [defaultUserRole._id];
    // }

    await user.save();

    res.send({ message: 'User was registered successfully!' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.username })

    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: 'Invalid Password!' });
    }

    const token = jwt.sign(
      { id: user._id },
      config.secret,
      {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: 86400, // 24 hours
      }
    );

    const userData = {
      id: user._id,
      username: user.userName,
      email: user.email,
      // roles: authorities,
    };

    jwtUtils.createJwt(userData, (generatedToken) => {
      if (generatedToken) {
        res.json({
          token: generatedToken,
          id: user._id,
          username: user.userName,
          email: user.email,
          // roles: authorities,
        });
      }
    });

    // req.session.token = token;
    // res.json({
    //   id: user._id,
    //   username: user.userName,
    //   email: user.email,
    //   // roles: authorities,
    // });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
};