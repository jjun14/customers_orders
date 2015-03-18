// use the config method to set up routing:
myApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './angular/partials/customers.html'
    })
    .when('/orders', {
      templateUrl: './angular/partials/orders.html'
    })
    .when('/customers', {
      templateUrl: './angular/partials/customers.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});