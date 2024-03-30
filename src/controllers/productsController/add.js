module.exports = (req,res) => {
    const db = require("../../database/models")

    const colores = db.Color.findAll({
        order : ['name']
    })
    const categorias = db.Category.findAll({
        order : ['name']
    })
    const marcas = db.Brand.findAll({
        order : ['name']
    })
    const sections = db.Section.findAll({
        order : ['name']
    })

    const talles = db.Size.findAll()

    Promise.all([colores,categorias,marcas,talles, sections])
    .then(([colores,categorias,marcas,talles, sections]) =>{
        return res.render('products/productAdd',{user:req.session.user,colores,categorias,marcas,talles, sections})
    })
}