module.exports = (req,res) => {
    const db = require("../../database/models")

    const colores = db.Color.findAll()
    const categorias = db.Category.findAll()

    Promise.all([colores,categorias])
    .then(([colores,categorias]) =>{
        return res.render('products/productAdd',{user:req.session.user,colores,categorias})
    })


    
    

    
}