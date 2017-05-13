/**
 * Created by Julius Alvarado on 5/7/2017.
 */

//-- SailsJS app:
(function(){
    "use strict";

    var app = angular.module('app', ['satellizer'])
        .config(function($authProvider) {
            $authProvider.twitter({
                url: '/api/user/jlogin'
            });
        });
}());

