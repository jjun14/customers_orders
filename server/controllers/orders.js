// make an immediate function that gives back an object that has methods that handle our requests
// require mongoose so that we can access the model
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
module.exports = (function(){
  // return because we want to put an object into the variable for whatever requires this
  return {
    show: function(req, res){
      console.log('in the orders show method');
      Order.find({}, function(err, results){
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
      console.log('in the orders create method');
      console.log(req.body);
      var order = new Order(req.body);
      order.save(function(err, result){
        if(err){
          console.log("there was an error creating order");
        } else {
          console.log('succesfully created order');
        }
      })
    },
    delete: function(req, res){
      console.log('in the orders delete method');
      console.log(req.body._id);
      Order.remove({_id: req.body._id}, function(err, result){
        if(err){
          console.log(err);
        } else {
          console.log('deleted order');
        }
      })
    }
  }
})();