/**
 * Created by Julius Alvarado on 5/5/2017.
 */

(function(){
    var app = angular.module('ap-slider'),
        componentId = 'sliderProduct';

    app.component(componentId, {
        templateUrl: 'design/views/templates/slider.product.tem.html',
        controller: function(jProductGroup1Data) {

            var vm = this;

            vm.categoriesTitle = "AussieProducts.com categories";
            vm.jexpenses = jProductGroup1Data.jexpenses;
            vm.jcategories = jProductGroup1Data.jcategories;

            vm.createNewCategory = function () {
                vm.jcategories.$add({name: vm.newCategoryName});
                vm.newCategoryName = '';
            };

            vm.createExpense = function(expenseData){
                vm.jexpenses.$add(expenseData);
            };
        }
    });
})();
