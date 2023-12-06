const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    maxLength: 100,
    default: null,
  },
  userName: {
    type: String,
    maxLength: 100,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
  status: {
    type: Boolean,
    default: false,
  },
  firstName: {
    type: String,
    default: null,
  },
  lastName: {
    type: String,
    default: null,
  },
  mobile: {
    type: String,
    default: null,
  },
  countryCode: {
    type: String,
    default: null,
  },
  authCode: {
    type: String,
    default: null,
  },
  isMFA: {
    type: Boolean,
    default: true,
  },
  isRestricted: {
    type: Boolean,
    default: false,
  },
  lastLogin: {
    type: Date,
    default: null,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  createdBy: {
    type: Number,
  },
  updatedBy: {
    type: Number,
  },
  expensePlan: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ExpensePlan' }],
  incomePlan: [{ type: mongoose.Schema.Types.ObjectId, ref: 'IncomePlan' }],
  expense: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expense' }],
  income: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Income' }],
}, { timestamps: true });

// UserSchema.methods.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// UserSchema.methods.isValidPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };

// UserSchema.methods.toJSON = function () {
//     let values = Object.assign({}, this.toObject());

//     delete values.password;
//     delete values.createdBy;

//     return values;
// };

// const User = mongoose.model('User', UserSchema);
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;