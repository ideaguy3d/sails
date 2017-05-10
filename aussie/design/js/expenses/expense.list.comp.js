/**
 * Created by Julius Alvarado on 5/8/2017.
 */

(function(){
    "use strict";

    var app = angular.module('ap-slider');

    app.component('expenseListDisplay', {
        bindings: {
            jexpenses: '=expenseData'
        },
        templateUrl: 'design/js/expenses/expense.list.tem.html',
        controller: function(){

        }
    })
}());