const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
      
  Time : String,
  title : String,
  photo : String,
  text : String,
  para : String,
  video : [],

});
  
module.exports = mongoose.model('Photo', PhotoSchema);
