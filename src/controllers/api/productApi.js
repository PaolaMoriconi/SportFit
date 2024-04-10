const db = require("../../database/models")

const getAllProducts = async (req,res) =>{
    try {
        const rows = await db.Product.findAll({
            include: [
                {
                  association: "images",
                  attributes: ['name']
                },
                {
                  association: "categories",
                  attributes: ['name']
                },
                {
                  association : 'sizes',
                  attributes: ['name']
                }
              ],
        })

        return res.status(200).json({
            ok:true,
            
            products:rows
        })
        
    } catch (error) {
        
        return res.status(error.status || 500).json({
            ok:false,
            msg:error.message || "hubo un error"
        })
    }

}
const getProduct = async (req,res) =>{
    const {id} = req.params
    try {
        const product = await db.Product.findByPk(id,{
            include: [
                {
                  association: "images",
                  attributes: ['name']
                },
                {
                  association: "categories",
                  attributes: ['name']
                },
                {
                  association : 'sizes',
                  attributes: ['name']
                }
              ],
              attributes:{
                explude:["category_id"]
              }
             
        })
        const customProduct ={
            ...product.dataValues,
            category:product.categories.name
        }

        return res.status(200).json({
            ok:true,
            product:customProduct
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
// COLORES MARCAS Y CATEGORIAS //
const getSelectsColor = async (req,res) =>{
    
    try {
        const  colores = await db.Color.findAll()
            
       
            return res.status(200).json({
            ok:true,
            colores
        })
        
            
        
    } catch (error) {
        
        return res.status(error.status || 500).json({
            ok:false,
            msg:error.message || "hubo un error"
        })
    }

}
const getSelectsCategory = async (req,res) =>{
    
    try {
        const categories = await db.Category.findAll()
            
       
            return res.status(200).json({
            ok:true,
            categories
        })
        
            
        
    } catch (error) {
        
        return res.status(error.status || 500).json({
            ok:false,
            msg:error.message || "hubo un error"
        })
    }

}
const getSelectsBrands = async (req,res) =>{
    
    try {
        const brands =  await db.Brand.findAll()
            
       
        return res.status(200).json({
            ok:true,
            brands:brands
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
    removeImage,
    getSelectsColor,
    getSelectsBrands,
    getSelectsCategory,
    getProduct
}