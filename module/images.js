const mongoose = require('mongoose');

const ImagesSchema = new mongoose.Schema({
      
  Time : String,
  image : String,
  Username : String,
  docu : String,
  typedoc : String

});
  
module.exports = mongoose.model('Images', ImagesSchema);
