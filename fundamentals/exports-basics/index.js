console.log("Import node js core modules like OS");
const os = require("os");
const userinfo = os.userInfo();
console.log(userinfo.username);

console.log("Import node js third party modules install by npm ");
const _ = require("lodash");
let array = [1];
let other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
console.log(array);


console.log("Import your own created modules");
const utility = require("./utility");
console.log(utility.getName());