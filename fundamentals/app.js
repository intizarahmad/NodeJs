console.log("App Starting!!")
const os = require("os");
const fs = require("fs");
const userinfo = os.userInfo();

fs.appendFile("user-details.txt", `Hello ${userinfo.username} \n`, (err)=>{console.log(err);});