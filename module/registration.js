const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
      
  Time : String,
  first_name : String,
  last_name : String,
  father_name : String,
  mother_name : String,
  date_of_birth : String,
  aadhar_no : String,
  address : String,
  t_shirt_size : String,
  mobile_no : String,
  email : String,
  Gender : String,
  Username : String,
  event1 : String,
  event2 : String,
  pass : String,
  valid : String

});
  
module.exports = mongoose.model('User', UserSchema);
