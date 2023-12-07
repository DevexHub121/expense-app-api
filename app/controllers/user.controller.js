const User = require('../models').User;
const Role = require('../models').Role;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.role = async (req, res) => {
  try {
    const orgUsers = await User.find({
      _id: req.user.id,
    }).populate({
      path: "roles",
      select: ["id", "roleName", "roleTags"],
      model: Role,
    });

    res.json({ success: true, data: orgUsers });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};