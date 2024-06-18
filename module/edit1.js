const mongoose = require('mongoose');

const Edit1_1Schema = new mongoose.Schema({
      
  Time : String,
  update : String,
  id : String,

});
  
module.exports = mongoose.model('edit1', Edit1_1Schema);
