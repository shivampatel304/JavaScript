/*
create an application with the following roles:
admin - gets full access
subadmin - gets access to create/delete courses
testprep - gets access to create/delete tests
user - get access to consume content
*/

var user = "testprep";

switch(user){
    case "admin":
        console.log("You get full access.");
        break;
    case "subadmin":
        console.log("You get access to create/delete courses");
        break;
    case "testprep":
        console.log("You get access to create/delete tests");
        break;
    case "user":
        console.log("You get access to consume content");
        break;
    default:
        console.log("trial user");
        break;
}