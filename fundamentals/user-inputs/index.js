const yargs = require('yargs').argv;

const utility = require('./utility');
const command = yargs._[0];//process.argv[2];
const {name, email} = yargs; 
switch(command){
    case 'add': 
        utility.addUser(name, email);
        break;
    case 'delete': 
        utility.deleteUser(name);
        break;
    case 'getAll': 
        utility.listAllUser();
        break;
    default: 
        console.log('Invalid command found');
}