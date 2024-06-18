const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
      
  Time : String,
  image : String,
  Username : String,

});
  
module.exports = mongoose.model('Profile', ProfileSchema);
