// var num1 = 7;
// var num2 = 6;

// console.log(num1*num2);

// var answer = num1 > num2;

// console.log(answer);

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice)/listingPrice)*100;

discountPercent = Math.round(discountPercent);

console.log("Discount percentage is : " + discountPercent + "% off");

var result = listingPrice > sellingPrice;

console.log(typeof result);

 