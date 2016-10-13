var shoppingList = [{
    itemName: '*Bread',
    price: 11.00
}, {
    itemName: '*Milk',
    price: 7.00
}, {
    itemName: '*Bread',
    price: 19.50
}];

function printShoppingList(shoppingList) {

    //log heading/title of list
    console.log('Shopping List:')

    for (var y = 0; y < shoppingList.length; y++) {
        //STORE values of object in different variables
        var itemList = shoppingList[y];
        var itemName = itemList.itemName;
        var price = itemList.price;
        //log the item and price
        console.log(itemName + ' @ ' + ' R' + price);
    }
}


printShoppingList(shoppingList);
