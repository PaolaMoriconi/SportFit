const db = require (".././database/models")
const bcrypt = require("bcryptjs");

const getUserByPassword= async (email,password)=>{
    try {
        const user = await db.User.findOne({
            where:{
                email
            }
        })
        
        const passwordMatch = await bcrypt.compare(password, user.password)

        if (passwordMatch) {
            return user
            
        }
        
    } catch (error) {
        return console.log(error)
    }
} 



module.exports = {
    getUserByPassword
}