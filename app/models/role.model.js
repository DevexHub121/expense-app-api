const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: true,
  },
  roleDescription: {
    type: String,
    default: null,
  },
  roleTags: {
    type: String,
    default: null,
  },
  isDefaultRegister: {
    type: Boolean,
    default: false,
  },
  isDefaultInvite: {
    type: Boolean,
    default: false,
  },
  isClientUser: {
    type: Boolean,
    default: false,
  },
  isOrgUser: {
    type: Boolean,
    default: false,
  },
  isOrgAdmin: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: Number,
    default: null,
  },
  updatedBy: {
    type: Number,
    default: null,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  client_assignment_permission: {
    type: Boolean,
    default: true,
  },
  lead_assignment_permission: {
    type: Boolean,
    default: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the Author model
  },
}, { timestamps: true });

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;