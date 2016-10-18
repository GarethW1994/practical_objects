var salesData = [
    {department : 'hardware',   sales : 4500,  day : 'Monday'},
    {department : 'outdoor',    sales : 1500,  day : 'Monday'},
    {department : 'carpentry',  sales : 5500,  day : 'Monday'},
    {department : 'hardware',   sales : 7500,  day : 'Tuesday'},
    {department : 'outdoor',    sales : 2505,  day : 'Tuesday'},
    {department : 'carpentry',  sales : 1540,  day : 'Tuesday'},
    {department : 'hardware',   sales : 1500,  day : 'Wednesday'},
    {department : 'outdoor',    sales : 8507,  day : 'Wednesday'},
    {department : 'carpentry',  sales : 8009,  day : 'Wednesday'},
    {department : 'hardware',   sales : 12000, day : 'Thursday'},
    {department : 'outdoor',    sales : 18007, day : 'Thursday'},
    {department : 'carpentry',  sales : 6109,  day : 'Thursday'},
    {department : 'hardware',   sales : 7005,  day : 'Friday'},
    {department : 'outdoor',    sales : 12006, day : 'Friday'},
    {department : 'carpentry',  sales : 16109, day : 'Friday'},
];

function mostProfitableDay(salesDat) {
    var profitableDep = [];
    var days = [];
    var profDay = '';
    //maxSales get the highest sale out all the sales in the profitableDep array
    var maxSales = Math.max.apply(null, profitableDep);

    for (var i = 0; i < salesDat.length; i++) {
        var salesList = salesDat[i];
        var sales = salesList.sales;
        var day = salesList.day;

        //push sales and days into an arrray
        profitableDep.push(sales);
        days.push(day);

        //determine the biggest sale made
        if (profitableDep[i] > maxSales) {
            maxSales = profitableDep[i];
            profDay = days[i];
        }
    }

    //return profitable day
    return profDay;
}
const assert = require('assert');

var profitDay = mostProfitableDay(salesData);

assert.deepEqual(profitDay, 'Thursday');

console.log('Profitable Day: ', mostProfitableDay(salesData));
