(function() {

    var MainController = function($scope, $location) {

        $scope.subreddit = function(subredditName) {
            $location.path("/subreddit/" + subredditName);
        };

    };

    angular.module("redditSPA")
        .controller("MainController", ["$scope", "$location", MainController]);

}());