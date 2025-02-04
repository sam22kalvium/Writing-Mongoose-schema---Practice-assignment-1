const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String], // Array of strings for role-based access control
    default: ['user']
  },
  profile: {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number }
  },
  lastLogin: {
    type: Date,
    default: null
  }
});

// Export the model
module.exports = mongoose.model('User', userSchema);