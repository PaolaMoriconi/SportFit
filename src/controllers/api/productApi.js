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

const addImage = async (req,res) => {
    try {
        const {id} = req.query;
        if(!id) throw new Error('Se precisa el ID del producto')

        await db.Image.create({
            name : req.files[0].filename,
            product_id : id,
        })

        const images = await db.Image.findAll({
            where : {
                product_id : id
            }
        });

        return res.status(200).json({
            ok:true,
            msg: "Imagen agregada con éxito",
            images
        })
        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok:false,
            msg:error.message || "hubo un error"
        })
    }
}

const removeImage = async (req,res) => {
    try {
        const {id, product} = req.query;

        if(!id) throw new Error('Se precisa el ID de la imagen')

        await db.Image.destroy({
            where : {
                id
            }
        })

        const images = await db.Image.findAll({
            where : {
                product_id : product
            }
        });



        return res.status(200).json({
            ok:true,
            msg: "Imagen elimada con éxito",
            images
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
    updateSizes,
    addImage,
    removeImage
}