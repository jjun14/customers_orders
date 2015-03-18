// make an immediate function that gives back an object that has methods that handle our requests
// require mongoose so that we can access the model
var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = (function(){
  // return because we want to put an object into the variable for whatever requires this
  return {
    show: function(req, res){
      console.log('in the products show method');
      Product.find({}, function(err, results){
        if(err){
          console.log(err);
        }
        else{
          // console.log(results);
          res.send(JSON.stringify(results));     
        }
      })
    },
  }
})();