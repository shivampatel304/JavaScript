// show user a signout button if he is authenticated
// other wise show him option to Login/Signup

var authenticated = ture;

// if(authenticated){
//     console.log("Show singout button");
// }else{
//     console.log("Show login button");
// }

authenticated ? console.log("Singout Button") : console.log("Login Button");