demoApp.directive('address', function() {
    return {
        restrict: "E",
        scope: {
            user : "="
        },
        templateUrl: 'views/addressFriend.html'
    }
});