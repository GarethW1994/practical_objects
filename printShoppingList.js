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
    //console.log('Shopping List:')
    var listArr = [];

    for (var y = 0; y < shoppingList.length; y++) {
        //STORE values of object in different variables
        var itemList = shoppingList[y];
        var name = itemList.itemName;
        var price = itemList.price;
        //push
        listArr.push(name + ' @ ' + 'R' + price);
      }
    return listArr.join('\r\n');
}

console.log(printShoppingList(shoppingList));
