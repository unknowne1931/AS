const mongoose = require('mongoose');

const suportrSchema = new mongoose.Schema({
      
  Time : String,
  image : String,


});
  
module.exports = mongoose.model('suportr', suportrSchema);
