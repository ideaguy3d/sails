/**
 * Created by Julius Alvarado on 5/9/2017.
 */

(function(){
    "use strict";

    var app = angular.module('ap-slider'),
        factoryId = 'jExpenseList';

    app.factory(factoryId, ['$firebaseArray',
        function($firebaseArray){

            var ExpenseList = $firebaseArray.$extend({
                getTotal: function(){
                    var total = 0;
                    angular.forEach(this.$list, function(rec){
                        total += rec.amount;
                    });
                    return total;
                }        
            });

            return function (ref) {
                return new ExpenseList(ref);
            }
        }
    ]);
}());