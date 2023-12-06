const mongoose = require("mongoose");

const IncomePlanSchema = new mongoose.Schema({
  savings: {
    type: Number,
    default: null,
  },
  paycheck: {
    type: Number,
    default: null,
  },
  bonus: {
    type: Number,
    default: null,
  },
  interest: {
    type: Number,
    default: null,
  },
  other: {
    type: Number,
    default: null,
  },
  custom_category: {
    type: Number,
    default: null,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the Author model
  },
}, { timestamps: true });

const IncomePlan = mongoose.model('IncomePlan', IncomePlanSchema);

module.exports = IncomePlan;