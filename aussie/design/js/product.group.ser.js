/**
 * Created by Julius Alvarado on 5/5/2017.
 */

(function(){

    var app = angular.module('ap-slider');
    // products group 1 data service
    app.factory("jProductGroup1Data", ['$firebaseObject', '$firebaseArray',
        function ($firebaseObject, $firebaseArray) {
            var ref_messages = firebase.database().ref().child('messages');
            var ref_row1 = firebase.database().ref().child('Row1');
            var ref_jcategories = firebase.database().ref().child('jcategories').orderByChild("name");
            var ref_jexpenses = firebase.database().ref().child('jexpenses').child('julius1');


            return {
                Row1: $firebaseArray(ref_row1),
                jcategories: $firebaseArray(ref_jcategories),
                jexpenses: $firebaseArray(ref_jexpenses),
                ProductsMessagesArray: function () {
                    return $firebaseArray(ref_messages);
                }
            }
        }
    ]);
})();
