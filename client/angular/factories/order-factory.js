myApp.factory('orderFactory', function($http){
  var factory = {}
  var orders = [];
  factory.getOrders = function(callback){
    $http.get('/all_orders').success(function(output){
      // get orders from db and update factory
      orders = output;
      // console.log(orders);
      // sets $scope.orders to the value of orders in the orderFactory
      callback(orders);
    });
  }
  factory.addOrder = function(data){
    $http.post('/add_order', data);
    orders.push(data);
  }
  factory.deleteOrder = function(data){
    $http.post('/delete_order', data);
    orders.splice(orders.indexOf(data), 1);
  }
  return factory;
});