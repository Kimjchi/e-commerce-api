const User = require('../Models/user');

const getAll = async (req, res) => {  
    const users = await User.getAllUsers();  
    if(users){    
        res.status(200).json({      
            message:"Found",                     
            users,
        })  
    }  
    else{    
        res.status(400).json({       
            message:"Bad request"    
        })  
}}
module.exports = {
    getAll
}