const User = require('../Models/user');

const getAll = async (req, res) => {  
    await User
        .getAllUsers()
        .then(users => {
            res.status(201).json({      
                message:"Found",
                data: users['rows']
            });
        })
        .catch(e => {
            console.error(e.stack);
            res.status(400).json({       
                message: e.detail   
            });
        });
};

const registerNewUser = async (req, res) => {  
    const { firstName, lastName, email, password } = req.body;
    // Validate params
    if (!firstName || !lastName || !email || !password) {
        res.status(400).json({       
            message:"Parameters missing"    
        });
    }
    await User
        .createNewUser(req.body)
        .then(newUser => {
            res.status(201).json({      
                message:"Created"
            });
        })
        .catch(e => {
            console.error(e.stack);
            res.status(400).json({       
                message: e.detail   
            });
        });
};

module.exports = {
    getAll,
    registerNewUser
};