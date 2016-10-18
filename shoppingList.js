//list one
var shoppingList1 = [
    { itemName : 'Bread',     price : 11.00 },
    { itemName : 'Milk',      price : 7.00  },
    { itemName : 'Cheese',    price : 19.50 }
];
//list two
var shoppingList2 = [
    { itemName : 'Apples',    price : 7.50  },
    { itemName : 'Bread',     price : 11.00 },
    { itemName : 'Milk',      price : 7.00  },
    { itemName : 'Cheese',    price : 23.00 },
    { itemName : 'Bread',     price : 9.50  }
];
//list three (own list)
var shoppingList3 = [
    { itemName : 'Pineapple',    price : 10.99  },
    { itemName : 'Potatoes',     price : 5.00   },
    { itemName : 'Strawberries', price : 11.00  },
    { itemName : 'Oranges',      price : 5.98   },
    { itemName : 'Fanta 2L',     price : 14.99  }
];

//function
function shoppingList(shoppingList) {
    var totalPrice = 0;
    var pricePerItem = [];

    for (var i = 0; i < shoppingList.length; i++) {
        var list = shoppingList[i];

        var name = list.itemName;

        totalPrice += list.price;
    }

    return totalPrice;
}

//test function
const assert = require('assert');

var firstList = shoppingList1;
var secondList = shoppingList2;
var thirdList = shoppingList3;

assert.deepEqual(shoppingList(firstList),  37.5  );
assert.deepEqual(shoppingList(secondList), 58    );
assert.deepEqual(shoppingList(thirdList),  47.96 );

//log function output
console.log('R',shoppingList(shoppingList1));
console.log('R',shoppingList(shoppingList2));
console.log('R',shoppingList(shoppingList3));
