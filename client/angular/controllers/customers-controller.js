myApp.controller('customersController', function($scope, customerFactory){
  updateCustomers();
  $scope.uniqueUser = true;

  // get all the current customers and save it in $scope.customers
  function updateCustomers(){
    customerFactory.getCustomers(function(output){
      $scope.customers = output;
    });
  }
  $scope.addCustomer = function(customer){
    for(var i = 0; i < $scope.customers.length; i++){
      if(customer.name == $scope.customers[i].name){
        $scope.uniqueUser = false;
        return;
      }
    }
    if($scope.uniqueUser == true){
      customer.created_at = new Date();
      customerFactory.addCustomer(customer);
    }
  }
  $scope.deleteCustomer = function(customer){
    customerFactory.deleteCustomer(customer);
    $scope.customers.splice($scope.customers.indexOf(customer), 1);
  }
});