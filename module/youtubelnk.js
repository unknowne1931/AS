const mongoose = require('mongoose');

const ut_videoSchema = new mongoose.Schema({
      
  Time : String,
  id : String, 
  video : []


});
  
module.exports = mongoose.model('ut_video', ut_videoSchema);
