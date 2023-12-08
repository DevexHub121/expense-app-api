const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const expenseController = require("../controllers/expense.controller");
const incomeController = require("../controllers/income.controller");
const incomePlanController = require("../controllers/income_plan.controller");
const expensePlanController = require("../controllers/expense_plan.controller");
const countryController = require("../controllers/country.controller");
var passport = require('passport');
const express = require("express");
const router = express.Router();

// module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, Content-Type, Accept"
//     );
//     next();
//   });
//   app.use(passport.initialize());
//   require('../../config/passport')(passport);
//   app.get("/api/test/all", controller.allAccess);
//   app.get("/api/test/role",passport.authenticate('jwt', { session: false }), controller.role);
//   app.post  ("/api/test/expense",passport.authenticate('jwt', { session: false }), expenseController.create);
//   app.get  ("/api/test/expense",passport.authenticate('jwt', { session: false }), expenseController.findAll);
//   app.put  ("/api/test/expense/:id",passport.authenticate('jwt', { session: false }), expenseController.update);
//   app.delete("/api/test/expense/:id",passport.authenticate('jwt', { session: false }), expenseController.delete);
//   app.post  ("/api/test/income",passport.authenticate('jwt', { session: false }), incomeController.create);
//   app.get  ("/api/test/income",passport.authenticate('jwt', { session: false }), incomeController.findAll);
//   app.put  ("/api/test/income/:id",passport.authenticate('jwt', { session: false }), incomeController.update);
//   app.delete("/api/test/income/:id",passport.authenticate('jwt', { session: false }), incomeController.delete);
//   app.post("/api/test/expensePlan",passport.authenticate('jwt', { session: false }), expensePlanController.create);
//   app.post("/api/test/incomePlan",passport.authenticate('jwt', { session: false }), incomePlanController.create);
//   app.get("/api/test/expensePlan",passport.authenticate('jwt', { session: false }), expensePlanController.findAll);
//   app.get("/api/test/incomePlan",passport.authenticate('jwt', { session: false }), incomePlanController.findAll);

//   app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

//   app.get(
//     "/api/test/mod",
//     [authJwt.verifyToken, authJwt.isModerator],
//     controller.moderatorBoard
//   );

//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );
// };

router.use(passport.initialize());
require('../../config/passport')(passport);
router.get("/all", controller.allAccess);
router.get("/role", controller.role);
router.get  ("/getUser",passport.authenticate('jwt', { session: false }), controller.findAll);
router.post  ("/createExpense",passport.authenticate('jwt', { session: false }), expenseController.create);
router.get  ("/expense",passport.authenticate('jwt', { session: false }), expenseController.findAll);
router.put  ("/updateExpense/:id",passport.authenticate('jwt', { session: false }), expenseController.update);
router.delete("/deleteExpense/:id",passport.authenticate('jwt', { session: false }), expenseController.delete);
router.post  ("/createIncome",passport.authenticate('jwt', { session: false }), incomeController.create);
router.get  ("/income",passport.authenticate('jwt', { session: false }), incomeController.findAll);
router.put  ("/updateIncome/:id",passport.authenticate('jwt', { session: false }), incomeController.update);
router.delete("/deleteIncome/:id",passport.authenticate('jwt', { session: false }), incomeController.delete);
router.post("/createExpensePlan",passport.authenticate('jwt', { session: false }), expensePlanController.create);
router.post("/createIncomePlan",passport.authenticate('jwt', { session: false }), incomePlanController.create);
router.get("/expensePlan",passport.authenticate('jwt', { session: false }), expensePlanController.findAll);
router.get("/incomePlan",passport.authenticate('jwt', { session: false }), incomePlanController.findAll);
router.get("/country",passport.authenticate('jwt', { session: false }), countryController.findAll);

  router.get("/user", controller.userBoard);

  router.get(
    "/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  router.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

module.exports = router;
