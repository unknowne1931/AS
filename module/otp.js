const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
      
  Time : String,
  email : String,
  otp : String,

});
  
module.exports = mongoose.model('OTP', OTPSchema);
