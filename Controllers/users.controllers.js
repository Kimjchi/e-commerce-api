

const getMe = async (req, res) => {  
    const userId = req.user.userId  
    // const user = await User.findById(userId)  
    if(user){    
           res.status(200).json({      
                           message:"Found",      
                           user,    
                           })  
            }  
            else{    
                 res.status(400).json({       
                                message:"Bad request"    
                               })  
}}
module.exports = {
    getMe,
}