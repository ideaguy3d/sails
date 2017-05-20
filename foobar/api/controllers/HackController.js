/**
 * HackController
 *
 * @description :: Server-side logic for managing hacks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    aa2o: function (req, res) {

    }
};

//-- utility functions:
function obj2arr(obj) {
    var o2a = [], fooCount = 0;
    for (var k in obj) {
        o2a[fooCount] = k;
        fooCount++;
    }
    console.log(o2a);
    return o2a;
}

function arrayOfArrays2Object(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr[i].forEach(function (elem, idx, innerArr) {
                if (idx === 0) {
                    obj[elem] = arr[i][(idx + 1)];
                }
            });
        }
    }
    console.log("obj = ");
    console.log(obj);
    return obj;
}

var foobar = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
// arrayOfArrays2Object(foobar);

var moocar = {
    a: 'a',
    number: 11,
    hungry: true,
    grammyWins: 1
};

function objKeys2array(obj) {
    var arr = [], count = 0;
    for (var k in obj) {
        arr[count] = obj[k];
        count++;
    }
    return arr;
}

objKeys2array(moocar);

var empData =

    [// 0
        [ // 1
            ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
        ],
        [
            ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
        ]
    ];

function transformEmpData(arr) {
    for (var i = 0; i < arr.length; i++) {
        var tempArray = arr[i].slice();
        console.log("tempArray = ");
        console.log(tempArray);
        for (var i2 = 0; i < tempArray.length; i2++) {
            console.log(tempArray[i2][0]);
        }
    }
}

transformEmpData(empData);



