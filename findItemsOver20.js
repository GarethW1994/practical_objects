//list objects
var itemList = [
    { name : 'apples',  price   : 10 },
    { name : 'pears',   price   : 37 },
    { name : 'bananas', price   : 27 },
    { name : 'apples',  price   : 3  },
];

var itemList2 = [
    { name : 'jeans',  price    : 299.99 },
    { name : 'shirt',  price    : 99.99  },
    { name : 'jacket', price    : 499.99 },
];

//function
function findItemsOver20(list, threshold) {
    var over20obj = [];

    for (var i = 0; i < list.length; i++) {
        var listName = list[i];
        var price = listName.price;

        if (list[i].price > threshold) {
            over20obj.push({
                'Item': listName
            });
        }
    }

    return over20obj;
};

//Test function
const assert = require('assert');
//test variables saves output of function
var listOne = findItemsOver20(itemList, 20);
var listTwo = findItemsOver20(itemList2, 100);
//compare the output
assert.deepEqual(listOne, [{
    Item: {
        name: 'pears',
        price: 37
    }
}, {
    Item: {
        name: 'bananas',
        price: 27
    }
}]);

assert.deepEqual(listTwo, [{
    Item: {
        name: 'jeans',
        price: 299.99
    }
}, {
    Item: {
        name: 'jacket',
        price: 499.99
    }
}]);
//log output
console.log(findItemsOver20(itemList, 20));
console.log(" ");
console.log(findItemsOver20(itemList2, 100));
