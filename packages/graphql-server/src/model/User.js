var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  role: String,
  isAuth: String
});


module.exports = mongoose.model('User', UserSchema);