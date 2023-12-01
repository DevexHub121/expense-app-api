const Expenseplan = require('../models').Expenseplan
exports.create = (req, res) => {
    Expenseplan.findOne({where: {
      userId:req.user.id,
    }}).then((data) => {
        console.log("dataExpenseplan---")
        console.log("dataExpenseplan---")
        console.log("dataExpenseplan---")
        console.log(data)
        console.log("req.bodyExpenseplan---")
        console.log("req.bodyExpenseplan---")
        console.log("req.bodyExpenseplan---")
        console.log(req.body)
        if(data){
          Expenseplan.update(req.body, {
            where: {
              id:data.id,
            },}
          )
            .then((data) => {
              res.json({ success: true, data: data });
            })
        .catch((err) => res.json({ success: false, error: err }));
        }else{
          req.body.userId = req.user.id
          Expenseplan.create(req.body)
        .then((data) => {
            console.log("data1Expenseplan---")
        console.log("data1Expenseplan---")
        console.log("data1Expenseplan---")
        console.log(data)
          res.json({ success: true, data: data });
        })
        .catch((err) => 
        {console.log("err---")
        console.log("err---")
        console.log("err---")
        console.log(err)
        res.json({ success: false, error: err })}
        );
        }
        
      })
      .catch((err) => res.json({ success: false, error: err }));
  };
exports.findAll = (req, res) => {
    Expenseplan.findAll({
                attributes: ['Debt','Food','Gifts','Health_medical','Home','Transportation','Personal','Pets','Utilities','Travel','Debt','Other','custom_category1','custom_category2','custom_category3'],where: {
                  userId:req.user.id,
                },})
    .then((data) => {
      res.json({ success: true, data: data });
    })
    .catch((err) => res.json({ success: false, error: err }));
  };
exports.update = (req, res) => {
    Expenseplan.update(req.body, {
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
    Expenseplan.destroy({
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
  
 