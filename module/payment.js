const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
      
  Time : String,
  image : String,
  Username : String,
  trn : String,


});
  
module.exports = mongoose.model('Payment', PaymentSchema);
