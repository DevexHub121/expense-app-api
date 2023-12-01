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
exports.role = (req, res) => {
  User.findAll({
    include: [
      {
        model: Role,
        as: "roles",
        attributes: ["id", "roleName", "roleTags"],
      },
    ],
    where: { id: req.user.orgId },
  })
    .then((orgUsers) => {
        res.json({success:true,data:orgUsers})
    })
  res.status(200).send("Moderator Content.");
};
