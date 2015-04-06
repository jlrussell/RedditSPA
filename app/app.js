'use strict';

(function() {

  var app = angular.module("redditSPA", ["ngRoute"]);

  app.config(function($routeProvider) {
    $routeProvider
        .when("/main", {
          templateUrl: "main/main.html",
          controller: "MainController"
        })
        .when("/subreddit/:subreddit", {
          templateUrl: "subreddit/subreddit.html",
          controller: "SubredditController"
        })
        .otherwise({redirectTo:"/main"});
  })

}());
