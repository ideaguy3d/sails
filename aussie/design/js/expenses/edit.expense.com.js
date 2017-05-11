/**
 * Created by Julius Alvarado on 5/9/2017.
 */

(function(){
    "use strict";

    angular.module('ap-slider').component('editExpense', {
        templateUrl: 'design/js/expenses/edit.expense.tem.html',
        bindings: {
            createNewExpense: '&'
        },
        controller: function(jProductGroup1Data){
            var ee = this;
            ee.setDefaults = function(){
                ee.amout = '';
                ee.description = '';
                ee.payee = '';
                ee.date = new Date('3/3/2017').toLocaleDateString();
            };

            ee.setDefaults();

            ee.create = function() {
                ee.expenseData = {
                    amount: parseFloat(ee.amount),
                    description: ee.description,
                    payee: ee.payee,
                    category: { name: ee.selectedCategory.name, id: ee.selectedCategory.$id },
                    date: new Date().toJSON()
                };
                ee.setDefaults();
                ee.createNewExpense( { expenseData: ee.expenseData } );
            };

            function activate() {
                jProductGroup1Data.jcategories.$loaded().then(function(res){
                    ee.categories = res;
                    ee.selectedCategory = res[0];
                });
            }

            activate();
        }
    });
}());