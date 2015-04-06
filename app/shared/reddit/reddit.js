'use strict';

(function() {
    var reddit = function($http) {
        var userAgent = 'RedditSPA';

        var subreddit = function(subredditName, subredditOrder, params) {
            if(subredditOrder != 'new')
                subredditOrder = 'hot';
            var urlFormat = 'http://reddit.com/r/%s/%s.json';
            var formattedUrl = sprintf(urlFormat, subredditName, subredditOrder);
            if(params != undefined) {
                var query = '';
                for(key in params) {
                    if(query == '') {
                        query += '?';
                    } else {
                        query += '&';
                    }
                    query += key + '=' + data[key];
                }
                formattedUrl += query;
            }
            return $http.get(formattedUrl, {'User-Agent': userAgent})
                .then(function(response) {
                    return response.data;
                });
        }

        return {
            userAgent: userAgent,
            subreddit: subreddit
        };
    };

    angular.module("redditSPA")
        .factory("reddit", ["$http", reddit]);

}());