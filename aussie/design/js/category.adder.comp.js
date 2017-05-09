/**
 * Created by Julius Alvarado on 5/9/2017.
 */


(function(){
    "use strict";

    var app = angular.module('ap-slider'),
        componentId = "categoryAdder";

    app.component(componentId, {
        bindings: {
            categoriesTitle: '=',
            jcategories: '='
        },
       templateUrl: 'design/views/templates/category.adder.tem.html'
    });

}());