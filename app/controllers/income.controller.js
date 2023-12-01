const Income = require('../models').Income
exports.create = (req, res) => {
  req.body.userId = req.user.id
    Income.create(req.body)
    .then((data) => {
      res.json({ success: true, data: data });
    })
    .catch((err) => res.json({ success: false, error: err }));
  };
exports.findAll = (req, res) => {
    Income.findAll({attributes: ['id','amount', 'category', 'description', 'date'],where: { userId: req.user.id }})
    .then((data) => {
      res.json({ success: true, data: data });
    })
    .catch((err) => res.json({ success: false, error: err }));
  };
exports.update = (req, res) => {
    Income.update(req.body, {
        where: {
          id:req.params.id,
        },
      })
        .then((data) => {
          res.json({ success: true, data: data });
        })
    .catch((err) => res.json({ success: false, error: err }));
  };
exports.delete = (req, res) => {
    Income.destroy({
        where: {
          id:req.params.id,
        },
      })
        .then((data) => {
          res.json({ success: true, data: data });
        })
    .catch((err) => res.json({ success: false, error: err }));
  };
// exports.create = (req, res) => {
//   };
// exports.create = (req, res) => {
//   };
// exports.create = (req, res) => {
//     User.findOne({
//         attributes: ['id'],
//         include: [
//             { model: AlpacaOrderColumn }
//         ],
//         where: { id: req.user.id }
//     }).then((userColumnData) => {
//         res.json({ success: true, data: userColumnData.alpacaOrderColumns })
//     }).catch(next)
//   };
  
 