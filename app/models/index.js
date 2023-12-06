const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('../../config/db-config');
const RoleSchema =require('./role.model')
const UserSchema =require('./user.model')
const ExpenseSchema =require('./expense.model')
const IncomeSchema =require('./income.model')
const ExpenseplanSchema =require('./expense_plan.model')
const IncomeplanSchema =require('./income_plan.model')
console.log('config--------')
console.log('config--------')
console.log('config--------')
console.log(config)

mongoose.connect(`${config.uri}`)
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

// const Schema = mongoose.Schema;

// const RoleSchema = new Schema({
//   roleName: String,
//   // Add other fields as needed
// });

// const UserSchema = new Schema({
//   email: String,
//   userName: String,
//   password: String,
//   // Add other fields as needed
// });

// const ExpenseSchema = new Schema({
//   amount: String,
//   category: String,
//   date: Date,
//   description: String,
//   // Add other fields as needed
// });

// const IncomeSchema = new Schema({
//   amount: String,
//   category: String,
//   date: Date,
//   description: String,
//   // Add other fields as needed
// });

// const ExpenseplanSchema = new Schema({
//   // Define your Expenseplan schema
//   // Example:
//   Gifts: Number,
//   Food: Number,
//   // Add other fields as needed
// });

// const IncomeplanSchema = new Schema({
//   // Define your Incomeplan schema
//   // Example:
//   savings: Number,
//   paycheck: Number,
//   // Add other fields as needed
// });

// const Role = mongoose.model('Role', RoleSchema);
// const User = mongoose.model('User', RoleSchema);
// const Expense = mongoose.model('Expense', ExpenseSchema);
// const Income = mongoose.model('Income', IncomeSchema);
// const Expenseplan = mongoose.model('Expenseplan', ExpenseplanSchema);
// const Incomeplan = mongoose.model('Incomeplan', IncomeplanSchema);

const db = {
  mongoose: mongoose,
  Role: RoleSchema,
  User: UserSchema,
  Expense: ExpenseSchema,
  Income: IncomeSchema,
  Expenseplan: ExpenseplanSchema,
  Incomeplan: IncomeplanSchema,
  ROLES: ["user", "admin", "moderator"],
};

module.exports = db;