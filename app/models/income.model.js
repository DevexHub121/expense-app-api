const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
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

const Income = mongoose.model('Income', IncomeSchema);

module.exports = Income;