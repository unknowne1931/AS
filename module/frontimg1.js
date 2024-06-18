const mongoose = require('mongoose');

const Edit2_2Schema = new mongoose.Schema({
      
  Time : String,
  id : String,
  images : []

});
  
module.exports = mongoose.model('Profile_Image', Edit2_2Schema);
