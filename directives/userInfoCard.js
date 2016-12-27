demoApp.directive('userInfoCard', function() {
    return {
        templateUrl: "views/userInfoCard.html",
        //require: "^serviceController",
        restrict: "E",
        scope: {
            user: '=user'
        },
        transclude : true,
        //template : "<div class='myTransclude' ng-transclude></div>",
        //template : "<myTransclude ng-transclude>This is a transcluded directive {{user}}</myTransclude>",
        compile: function(element, attributes) {
            //console.log('compiler');
            var linkFunction = function($scope, element, atttributes) {
                //console.log('link', $scope.user[0].name);
            }
            return linkFunction;
        },
        controller: function($scope){
            $scope.user=[
                {name:"Harish from directive controller",num:5105095046, city:"San Jose"},
            ],
            $scope.dcntrlfn = function (){
                console.log($scope.user);
            }
        }
    }
});
