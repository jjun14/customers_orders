myApp.controller('ordersController', function($scope, orderFactory, productFactory, customerFactory){
  getCustomers();
  getProducts();
  updateOrders();
  function getCustomers(){
    customerFactory.getCustomers(function(output){
      $scope.customers = output;
    })
  }
  function getProducts(){
    productFactory.getProducts(function(ouput){
      $scope.products = ouput;
    })
  }
  function updateOrders(){
    orderFactory.getOrders(function(output){
      $scope.orders = output;
      console.log($scope.orders);
    })
  }
  $scope.addOrder = function(order){
    var date = new Date()
    console.log('adding order');
    order.created_at = date;
    order.product = order.product.name;
    console.log(order);
    orderFactory.addOrder(order);
  }
  $scope.removeOrder = function(data){
    console.log('removing order');
    orderFactory.deleteOrder(data);
  }
});