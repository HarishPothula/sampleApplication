var demoApp = angular.module('demoApp', ['ngRoute']);
demoApp.value("numberValue", 999);
demoApp.value("stringValue", "abc");
demoApp.value("objectValue", { val1 : 123, val2 : "abc"});
demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/view1',
        {   controller: 'simpleController',
            templateUrl: 'views/Basics.html',
            foodata: 'addorder'
        }).when('/view2',
        {  controller: 'simpleController',
            templateUrl: 'views/formValidation.html'
        }).when('/view3',
        {   controller: 'simpleController',
            templateUrl: 'views/customDirectives.html'
        }).when('/view4',
        {   controller: 'editController',
            templateUrl: 'views/scope.html'
        }).when('/view5',
        {   controller: 'serviceController',
            templateUrl: 'views/services.html'
        }).when('/view6',
        {   controller: 'getajaxController',
            templateUrl: 'views/getAjax.html'
        }).when('/view7',
        {   controller: 'postAjaxController',
            templateUrl: 'views/postAjax.html'
        }).otherwise({redirectTo: '/',title: 'Home'});
});
var sampleApp = angular.module('sampleApp',[]);
    sampleApp.controller('sampleAppController',function($scope){
        $scope.parents = [
            {name: "Harish", num: "(510)509-5046", city: "San Joses"}
        ]
    });
angular.bootstrap(document.getElementById("App2"),['sampleApp']);