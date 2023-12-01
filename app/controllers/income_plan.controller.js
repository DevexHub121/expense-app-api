const Incomeplan = require('../models').Incomeplan
exports.create = (req, res) => {
  Incomeplan.findOne({where: {
    userId:req.user.id,
  }}).then((data) => {
    console.log("data---")
    console.log("data---")
    console.log("data---")
    console.log(data)
    if(data){
      Incomeplan.update(req.body, {
        where: {
          id:data.id,
        },
      }
      )
        .then((data) => {
          res.json({ success: true, data: data });
        })
    .catch((err) => res.json({ success: false, error: err }));
    }else{
      req.body.userId = req.user.id
      Incomeplan.create(req.body)
    .then((data) => {
      res.json({ success: true, data: data });
    })
    .catch((err) => res.json({ success: false, error: err }));
    }
    
  })
  .catch((err) => 
  { console.log("err---")
  console.log("err---")
  console.log("err---")
  console.log(err)
  res.json({ success: false, error: err })
  }
  );
    
  };
exports.findAll = (req, res) => {
    Incomeplan.findAll({
      attributes: ['bonus','custom_category','interest','other','paycheck','savings'],where: {
        userId:req.user.id,
      }})
    .then((data) => {
      res.json({ success: true, data: data });
    })
    .catch((err) => res.json({ success: false, error: err }));
  };
exports.update = (req, res) => {
    Incomeplan.update(req.body, {
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
    Incomeplan.destroy({
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
  
 