const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the Author model
  },
}, { timestamps: true });

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;