const mongoose = require('mongoose');

const AdminUserSchema = new mongoose.Schema({
      
  Time : String,
  email : String,
  pass : String,
  role : String,


});
  
module.exports = mongoose.model('Admin', AdminUserSchema);
