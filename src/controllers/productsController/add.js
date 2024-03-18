module.exports = (req,res) => {
    const db = require("../../database/models")

    const colores = db.Color.findAll()
    const categorias = db.Category.findAll()
    const marcas = db.Brand.findAll()
    const talles = db.Size.findAll()

    Promise.all([colores,categorias,marcas,talles])
    .then(([colores,categorias,marcas,talles]) =>{
        return res.render('products/productAdd',{user:req.session.user,colores,categorias,marcas,talles})
    })
}