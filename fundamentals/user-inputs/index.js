console.log(process.argv);
const commad = process.argv[2]
switch(commad){
    case 'add': 
    console.log('Add command found');
    break;
    case 'delete': 
    console.log('Delete command found');
    break;
    default: 
    console.log('Invalid command found');
}