const db = require (".././database/models")

const getUserByEmail= async (email)=>{
    try {
        const user = await db.User.findOne({
            where:{
                email
            }
        })
      
        return user
        
    } catch (error) {
        return console.log(error)
    }
} 



module.exports = {
    getUserByEmail
}