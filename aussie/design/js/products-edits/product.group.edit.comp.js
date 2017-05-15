/**
 * Created by Julius Alvarado on 5/15/2017.
 */


(function(){
    "use strict";

    var app = angular.module('ap-slider'),
        componentId = 'productGroupEdit';

    app.component(componentId, {
        templateUrl: 'design/js/products-edits/product.group.edit.temp.html',
        controllerAs: 'productGroup',
        controller: ['jProductGroup2Data', ProductGroupCtrl]
    });

    function ProductGroupCtrl (jProductGroup2Data) {
        var vm = this;
        vm.productGroups = jProductGroup2Data.Row1;
    }
}());