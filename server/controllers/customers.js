// make an immediate function that gives back an object that has methods that handle our requests
// require mongoose so that we can access the model
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function(){
  // return because we want to put an object into the variable for whatever requires this
  return {
    show: function(req, res){
      console.log('in the customers show method');
      Customer.find({}, function(err, results){
        if(err){
          console.log(err);
        }
        else{
          // console.log('here');
          // console.log(res);
          res.send(JSON.stringify(results));      
        }
      })
    },
    create: function(req, res){
      // console.log(req.body);
      var customer = new Customer(req.body);
      customer.save(function(err, result){
        if(err){
          console.log(err);
        }
        else{
          // console.log(result);
          console.log('added customer');
        }
      })
    },
    delete: function(req, res){
      console.log('in the delete method');
      // console.log(req.body._id);
      Customer.remove({_id: req.body._id}, function(err, results){
        if(err){
          console.log(err);
        }
        else {
          console.log('deleted customer');
        }
      })
    }
  }
})();