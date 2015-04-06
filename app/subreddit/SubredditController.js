(function() {

    var SubredditController = function($scope, $location, $routeParams, reddit) {
        $scope.subredditName = $routeParams.subreddit;



    };

    angular.module("redditSPA")
        .controller("SubredditController", ["$scope", "$location", "$routeParams", "reddit", SubredditController]);

}());