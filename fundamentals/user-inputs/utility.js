const addUser =(name, email)=>{
    console.log(`Adding used with name ${name} and email ${email}`)
}

const listAllUser =()=>{
    console.log(`listAllUser `)
}

const deleteUser =(name)=>{
    console.log(`User ${name} deleted`)
}
module.exports= {
    addUser,
    listAllUser,
    deleteUser
}