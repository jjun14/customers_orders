// we want to create a file that has the schema for our orders

var mongoose = require('mongoose');

// create a schema for our orders
var ProductSchema = new mongoose.Schema({
  name: String,
})

// create the model using that schema
// console.log("just created the model")
mongoose.model('Product', ProductSchema);