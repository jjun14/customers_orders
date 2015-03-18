myApp.factory('customerFactory', function($http){
  var factory = {};
  var customers = [];
  factory.getCustomers = function(callback){
    // send a get request to the url '/all_customers'
    $http.get('/all_customers').success(function(output){
      customers = output;
      // console.log(customers);
      callback(customers);
    })
  }
  factory.addCustomer = function(data){
    $http.post('/add_customer', data);
    customers.push(data);
  }
  factory.deleteCustomer = function(data){
    $http.post('/delete_customer', data).success(function(){
      // console.log(data);
      customers.splice(customers.indexOf(data), 1);
    });
  }
  return factory;
});