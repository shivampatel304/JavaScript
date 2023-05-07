const uid = "abc124"

/*

uid = "absd1332"

gives error as we cant change value of const.

*/

var fullName = "Shivam Patel";
var email = "shivampatel0304@gmail.com";
var password = "shivam123";
var confirmPassword = "Shivam123";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// can take input from user but we have to attach it with the web page
//fullName = prompt("Enter your name")

console.log("Full name : " ,fullName);
console.log(uid);
console.log(email);

console.log(`
    with Unique ID : ${uid}
    User id : ${fullName}
    and his email is : ${email}
    and uses the password : ${password}
`);