demoApp.controller("editController",['$scope','$rootScope', function($scope, $rootScope, $http){
    $rootScope.relatives =[
        {name:"Nithin",num:4000000000, city:"Fremont"},
        {name:"Dinesh",num:5105207000, city:"Texas"},
        {name:"Sharan",num:5100009568, city:"Boston"},
        {name:"Subbu",num:4111080866, city:"Union City"}
    ]
}]);
demoApp.controller("getajaxController", ['$scope', '$http','getdata', function($scope, $http, getdata){
        $scope.loadRemoteData = function (){
             getdata.userdetails().then(
                 function(friends){
                     $scope.user_data = friends;
                 });
         };
         $scope.loadRemoteData();
}]);
demoApp.controller("postAjaxController",['$scope', '$http','getdata',function($scope, $http, getdata){
    $scope.testVar = "chandra";
        $scope.subform = function(postAjax, newUser){
            if($scope.newUser){//console.log($scope.newUser);
                var Ele = angular.element(document.getElementById('msg'));
                Ele.empty();
                if(postAjax.$valid){
                    getdata.postSusData($scope.newUser).then(
                        function(newUser){
                            Ele.append('<div class="well"><p> your Data <br> { <p class="text-info">'
                            + 'First Name: ' + $scope.newUser.fname + '<br>'
                            + 'Last Name: ' + $scope.newUser.lname + '<br>'
                            + 'Education: ' + $scope.newUser.edu + '<br>'
                            + 'Occupation: ' + $scope.newUser.ocup + '<br>'
                            + 'Email: ' + $scope.newUser.email + '<br>'
                            + 'Mobile: ' + $scope.newUser.mob + '<br>'
                            + 'Address: ' + $scope.newUser.addr +
                            '</p> } <br> Saved successfully</p></div>');
                            $scope.postAjax.$setUntouched();
                        }
                    )
                }else{
                    Ele.append('<div class="well"><p class="text-danger"> Please fill all the Details </p></div>');

                }
            }
        }
}]);