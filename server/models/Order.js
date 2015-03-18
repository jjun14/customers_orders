// we want to create a file that has the schema for our orders

var mongoose = require('mongoose');

// create a schema for our orders
var OrderSchema = new mongoose.Schema({
  name: String,
  product: String,
  quantity: Number,
  created_at: String
})

// create the model using that schema
// console.log("just created the model")
mongoose.model('Order', OrderSchema);