var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  id: String,
  role: Number,
  email: String,
  password: String,
  name: String,
  isAuth: Boolean,
});

module.exports = mongoose.model('User', UserSchema);