const User = require('../Models/user');

const getAll = async (req, res) => {  
    await User
        .getAllUsers()
        .then(users => {
            res.status(200).json({      
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
    } else {
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
    }
};

const login = async (req, res) => {  
    const { email, password } = req.body;
    // Validate params
    if (!email || !password) {
        res.status(400).json({       
            message:"Parameters missing"    
        });
    } else {
        await User
            .findUser(req.body)
            .then(data => {
                if (data.rows[0] && data.rows[0]['password'] === password) {
                    res.status(200).json({      
                        message:"Login accepted",
                        sessionToken: "Fake token"
                    });
                } else {
                    res.status(403).json({      
                        message:"Wrong password or email"
                    });
                }
                
            })
            .catch(e => {
                console.error(e.stack);
                res.status(400).json({       
                    message: e.detail   
                });
            });
    }
};

const getUserById = async (req, res) => {  
    const { id } = req.params;
    // Validate params
    if (!id) {
        res.status(400).json({       
            message:"Parameters missing"    
        });
    } else {
        await User
            .getUserById(id)
            .then(user => {
                if (user['rows'][0]) {
                    res.status(200).json({      
                        message:"Found",
                        data: user['rows'][0]
                    });
                } else {
                    res.status(404).json({       
                        message: "User not found"  
                    });
                }
            })
            .catch(e => {
                console.error(e.stack);
                res.status(404).json({       
                    message: e.detail   
                });
            });
    }
};

const updateUser = async (req, res) => {  
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    // Validate params
    if (!firstName || !lastName || !email || !password || !id) {
        res.status(400).json({       
            message:"Parameters missing"    
        });
    } else {
        await User
            .updateUser(req.body, id)
            .then(data => {
                if (data.rowCount > 0) {
                    res.status(200).json({       
                        message: "Updated" 
                    });
                } else {
                    res.status(404).json({       
                        message: "User not found" 
                    });
                }            
            })
            .catch(e => {
                console.error(e.stack);
                res.status(400).json({       
                    message: e.detail   
                });
            });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    // Validate params
    if (!id) {
        res.status(400).json({       
            message:"Parameters missing"    
        });
    } else {
        await User
            .deleteUserById(id)
            .then(data => {
                if (data.rowCount > 0) {
                    res.status(200).json({       
                        message: "Deleted" 
                    });
                } else {
                    res.status(404).json({       
                        message: "User not found" 
                    });
                }            
            })
            .catch(e => {
                console.error(e.stack);
                res.status(400).json({       
                    message: e.detail   
                });
            });
    }
}

module.exports = {
    getAll,
    registerNewUser,
    login,
    getUserById,
    updateUser,
    deleteUser
};