const db = require("../../database/models")

const getAllProducts = async (req,res) =>{
    try {
        const {count,rows} = await db.Product.findAndCountAll()

        return res.status(200).json({
            ok:true,
            count,
            products:rows
        })
        
    } catch (error) {
        
        return res.status(error.status || 500).json({
            ok:false,
            msg:error.message || "hubo un error"
        })
    }

}
module.exports={
    getAllProducts
}