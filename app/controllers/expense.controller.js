const Expense = require('../models').Expense
exports.create = (req, res) => {
  req.body.userId = req.user.id
    Expense.create(req.body)
    .then((data) => {
      res.json({ success: true, data: data });
    })
    .catch((err) => res.json({ success: false, error: err }));
  };
exports.findAll = (req, res) => {
  console.log('req-----------')
  console.log('req-----------')
  console.log('req-----------')
  console.log(req.user)
    Expense.findAll( {where: { userId: req.user.id },
    })
    .then((data) => {
      res.json({ success: true, data: data });
    })
    .catch((err) => res.json({ success: false, error: err }));
  };
exports.update = (req, res) => {
    Expense.update(req.body, {
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
    Expense.destroy({
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
  
 