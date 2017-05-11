/**
 * Created by Julius Alvarado on 5/7/2017.
 */

(function(){
    "use strict";

    angular.module('app').controller('LoginCtrl', ['$scope',
        function($scope){
            $scope.login = function(){
                console.log("jha - Login Button Pressed /^_^/");
            }
        }
    ]);
}());

