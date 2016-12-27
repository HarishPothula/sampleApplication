
demoApp.controller("serviceController", function($scope, numberValue, myFactory, cust_service, $route, getdata) {

    $scope.di_val = numberValue;
    $scope.facty_val = myFactory;
    cust_service.calcRank();
    //console.log($route.current.controller, $route.current.templateUrl);
    //console.log(getdata);

});
