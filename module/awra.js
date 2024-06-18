const mongoose = require('mongoose');

const AwardSchema = new mongoose.Schema({
      
  Time : String,
  Username : String,
  rank : String,
  award : String,


});
  
module.exports = mongoose.model('Award', AwardSchema);
