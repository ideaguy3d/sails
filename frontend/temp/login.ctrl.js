/**
 * Created by Julius Alvarado on 5/7/2017.
 */

(function(){
    "use strict";

    angular.module('app').controller('LoginCtrl', ['$scope', '$auth', '$http',
        function($scope, $auth, $http) {
            $scope.login = function(){
                $auth.authenticate('twitter');
            };

            $scope.tweet = function(){
                $http.post('/api/post/tweet', '').then(function(res){

                });
            };
        }
    ]);
}());

