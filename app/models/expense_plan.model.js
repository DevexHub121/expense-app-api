const mongoose = require("mongoose");

const ExpensePlanSchema = new mongoose.Schema({
  Gifts: {
    type: Number,
    default: null,
  },
  Food: {
    type: Number,
    default: null,
  },
  Health_medical: {
    type: Number,
    default: null,
  },
  Home: {
    type: Number,
    default: null,
  },
  Transportation: {
    type: Number,
    default: null,
  },
  Personal: {
    type: Number,
    default: null,
  },
  Pets: {
    type: Number,
    default: null,
  },
  Utilities: {
    type: Number,
    default: null,
  },
  Travel: {
    type: Number,
    default: null,
  },
  Debt: {
    type: Number,
    default: null,
  },
  Other: {
    type: Number,
    default: null,
  },
  custom_category1: {
    type: Number,
    default: null,
  },
  custom_category2: {
    type: Number,
    default: null,
  },
  custom_category3: {
    type: Number,
    default: null,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the Author model
  },
}, { timestamps: true });

const ExpensePlan = mongoose.model('ExpensePlan', ExpensePlanSchema);

module.exports = ExpensePlan;