/**
 * Created by Julius Alvarado on 5/13/2017.
 */
//-- SailsJS app:
(function () {
    "use strict";

    var app = angular.module('sails-app', []),
        controllerId = 'BaseCtrl';

    app.controller(controllerId, ['$scope', '$http', BaseCtrlClass]);

    function BaseCtrlClass($scope, $http) {

        io.socket.get('/emoji-socket', function(data){
            $scope.emojisSocket = data;
            $scope.$apply();
        });

        io.socket.on('emoji-socket', function(event){
            switch (event.verb) {
                case 'created':
                    $scope.emojisSocket.push(event.data);
                    $scope.$apply();
                    break;
            }
        });

        $http.get('/emoji').then(function(response){
            $scope.emojis = response.data;
        }).catch(function(err){
            console.log("dammit, there was an error, "+err);
        });

    }
}());