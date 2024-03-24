const { getUserByPassword } = require("../../services/login")

const checkPassword = async (req,res) =>{
    try {
    const user = await getUserByPassword(req.query.email,req.query.password)

    return res.status(200).json({
        ok:true,
        isRegisted: user? true:false
    })
        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok:false,
            msg:error.message || "hubo un error"
        })
        
    }
}
module.exports={
    checkPassword
}