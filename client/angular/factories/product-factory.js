myApp.factory('productFactory', function($http){
  var factory = {}
  var products = [];
  factory.getProducts = function(callback){
    // console.log('getting products!');
    $http.get('/all_products').success(function(output){
      // get products from db and update factory
      // console.log(output);
      products = output;
      // console.log(products);
      // sets $scope.products to the value of products in the productFactory
      callback(products)
    })
  }
  return factory;
});