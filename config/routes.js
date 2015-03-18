// we are requiring a controller file that will do stuff when a route is triggered
var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');
var products = require('./../server/controllers/products.js');
module.exports = function(app) {
  // these routes are all going to return json 
  // don't want to render/redirect at all we just want to respond with data
  app.get('/', function(req, res){
    res.render('index');
  });
  app.get('/all_customers', function(req, res){
    customers.show(req, res);
  });
  app.post('/add_customer', function(req, res){
    customers.create(req, res);
  });  
  app.post('/delete_customer', function(req, res){
    customers.delete(req, res);
  });
  app.get('/all_orders', function(req, res){
    orders.show(req,res);
  })
  app.post('/add_order', function(req, res){
    orders.create(req, res);
  })
  app.post('/delete_order', function(req, res){
    orders.delete(req, res);
  })
  app.get('/all_products', function(req, res){
    products.show(req, res);
  })
}