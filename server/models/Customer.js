// we want to create a file that has the schema for our customers

var mongoose = require('mongoose');

// create a schema for our customers
var CustomerSchema = new mongoose.Schema({
  name: String,
  created_at: String
})

// create the model using that schema
// console.log("just created the model")
mongoose.model('Customer', CustomerSchema)