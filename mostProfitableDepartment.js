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

function mostProfitableDepartment(salesDat) {

    var departmentName = '';
    var highestSale = 0;

    //maxSales get the highest sale out all the sales in the profitableDep array
    var totalSalesHardware = 0;
    var totalSalesOutdoor = 0;
    var totalSalesCarpentry = 0;

    for (var i = 0; i < salesDat.length; i++) {
        var salesList = salesDat[i];
        var departName = salesList.department;
        var sales = salesList.sales;

        //Add sales from different departments
        if (departName === 'hardware') {
            totalSalesHardware += sales;
        } else if (departName === 'carpentry') {
            totalSalesCarpentry += sales;
        } else if (departName === 'outdoor') {
            totalSalesOutdoor += sales;
        }

        //determine the biggest sale made
        if (totalSalesCarpentry > totalSalesHardware && totalSalesCarpentry > totalSalesOutdoor) {
            departmentName = ' : carpentry';
            highestSale = totalSalesCarpentry;
        } else if (totalSalesOutdoor > totalSalesCarpentry && totalSalesOutdoor > totalSalesHardware) {
            departmentName = ' : outdoor';
            highestSale = totalSalesOutdoor;
        } else {
            departmentName: ' : hardware';
            highestSale = totalSalesHardware;
        }
    }


    //return profitable department
    return highestSale + departmentName;
}

//Test function
const assert = require('assert');
var profitDepartment = mostProfitableDepartment(salesData);

assert.equal(profitDepartment, '42525 : outdoor');

//log results
console.log('Profitable Department: ', mostProfitableDepartment(salesData));
