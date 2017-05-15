/**
 * Created by Julius Alvarado on 5/15/2017.
 */

(function () {
    "use strict";

    var app = angular.module('ap-slider'),
        componentId = 'productCardEdit';

    app.component(componentId, {
        templateUrl: 'design/js/products-edits/product.card.edit.temp.html',
        bindings: {
            productgroup: '<'
        },
        transclude: true,
        controllerAs: 'productCard',
        controller: [ProductCardCtrl]
    });

    function ProductCardCtrl() {
        var vm = this;
        vm.message = "Product Cards";
        vm.$onInit = function(){
            for(var k in vm.productgroup) {
                console.log("k = "+k);
            }
        }
    }
}());