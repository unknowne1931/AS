const mongoose = require('mongoose');

const suporterSchema = new mongoose.Schema({
      
  Time : String,
  image : String,
  ig : String,
  fb : String
});
  
module.exports = mongoose.model('spuport', suporterSchema);
