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

const updateSizes = async (req,res) => {
    try {

        const {idProduct,idSize} = req.body
        const checkSize = await db.ProductSize.findOne({
            where : {
                product_id : idProduct,
                size_id : idSize
            }
        })

        if(checkSize){
            await db.ProductSize.destroy({
                where : {
                    product_id : idProduct,
                    size_id : idSize
                }
            })
        }else {
            await db.ProductSize.create({
                product_id : idProduct,
                size_id : idSize
            })
        }

        return res.status(200).json({
            ok:true,
            msg: "Modificación exitosa"
        })
        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok:false,
            msg:error.message || "hubo un error"
        })
    }
}

module.exports={
    getAllProducts,
    updateSizes
}